const API_USERS = "http://localhost:5000/api/users";
const API_EXPENSES = "http://localhost:5000/api/expenses";

/* ================= AUTH ================= */

async function register() {
  const res = await fetch(`${API_USERS}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: regEmail.value,
      password: regPassword.value
    })
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) location.href = "login.html";
}

async function login() {
  const res = await fetch(`${API_USERS}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value
    })
  });

  const data = await res.json();
  if (!data.userId) {
    alert("Invalid email or password");
    return;
  }

  localStorage.setItem("userId", data.userId);
  location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("userId");
  location.href = "login.html";
}

/* ================= INCOME ================= */

function saveIncome() {
  const userId = localStorage.getItem("userId");
  const income = Number(incomeInput.value);

  if (income <= 0) {
    alert("Enter valid income");
    return;
  }

  localStorage.setItem("income_" + userId, income);
  loadDashboard();
}

/* ================= ADD EXPENSE ================= */

async function addExpense() {
  await fetch(`${API_EXPENSES}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: localStorage.getItem("userId"),
      title: title.value,
      amount: Number(amount.value),
      category: category.value,
      date: expenseDate.value
    })
  });

  location.replace("dashboard.html");
}

/* ================= DASHBOARD ================= */

async function loadDashboard() {
  const userId = localStorage.getItem("userId");

  const res = await fetch(`${API_EXPENSES}/${userId}`);
  const expenses = await res.json();

  const now = new Date();

  if (!yearSelect.options.length) {
    for (let y = now.getFullYear() - 5; y <= now.getFullYear() + 1; y++) {
      yearSelect.add(new Option(y, y));
    }

    for (let m = 0; m < 12; m++) {
      monthSelect.add(
        new Option(
          new Date(0, m).toLocaleString("default", { month: "long" }),
          m
        )
      );
    }

    yearSelect.value = now.getFullYear();
    monthSelect.value = now.getMonth();
  }

  const year = Number(yearSelect.value);
  const month = Number(monthSelect.value);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let total = 0;
  const map = {};
  const cat = { Food: 0, Travel: 0, Shopping: 0, Education: 0, Others: 0 };

  window.yearlyExpenses = {};

  expenses.forEach(e => {
    const d = new Date(e.date);
    const y = d.getFullYear();
    const m = d.getMonth();

    const ymKey = `${y}-${m}`;
    window.yearlyExpenses[ymKey] =
      (window.yearlyExpenses[ymKey] || 0) + e.amount;

    if (y === year && m === month) {
      const dayKey = d.toISOString().split("T")[0];
      map[dayKey] = map[dayKey] || [];
      map[dayKey].push(e);

      total += e.amount;
      cat[e.category] += e.amount;
    }
  });

  monthTotal.innerText = total;

  const income = Number(localStorage.getItem("income_" + userId)) || 0;
  incomeInput.value = income;

  const savings = income - total;
  monthSavings.innerText = savings;

  /* ===== EXACT INTELLIGENCE SCORE ===== */

  if (!income) {
    score.innerText = "--";
    scoreText.innerText = "Enter income to calculate score";
    incomeInfo.innerText = "";
  } else {
    const ratio = total / income;
    const percent = ratio * 100;
    let finalScore;

    if (ratio > 1) {
      finalScore = 5;
      scoreText.innerText = "Critical: expenses exceed income";
    } else {
      finalScore = Math.round(100 - percent);

      if (ratio <= 0.4) {
        finalScore += 10;
        scoreText.innerText = "Excellent: very healthy spending";
      } else if (ratio <= 0.7) {
        scoreText.innerText = "Good: balanced spending";
      } else {
        finalScore -= 15;
        scoreText.innerText = "High spending – savings under pressure";
      }
    }

    if (finalScore > 100) finalScore = 100;
    if (finalScore < 5) finalScore = 5;

    score.innerText = finalScore;
    incomeInfo.innerText = `You spent ${percent.toFixed(1)}% of your income`;
  }

  /* ===== FIXED & ORDERED CALENDAR ===== */

  calendar.innerHTML = "";
  dayExpenses.innerHTML = "";

  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const list = map[key] || [];
    const sum = list.reduce((s, e) => s + e.amount, 0);

    const div = document.createElement("div");
    div.className = "day";
    div.innerText = `${day}\n₹${sum}`;

    div.onclick = () => {
      dayExpenses.innerHTML = "";

      if (list.length === 0) {
        dayExpenses.innerHTML = "<li>No expenses on this day</li>";
        return;
      }

      list.forEach(e => {
        dayExpenses.innerHTML += `
          <li>
            ${e.title} ₹${e.amount}
            <button onclick="deleteExpense('${e._id}')">❌</button>
          </li>
        `;
      });
    };

    calendar.appendChild(div);
  }

  /* ===== PIE CHART ===== */

  if (window.chart) window.chart.destroy();

  window.chart = new Chart(expenseChart, {
    type: "pie",
    data: {
      labels: Object.keys(cat),
      datasets: [{ data: Object.values(cat) }]
    }
  });
}

/* ================= YEARLY SAVINGS ================= */

function showSavings() {
  const userId = localStorage.getItem("userId");
  const income = Number(localStorage.getItem("income_" + userId)) || 0;

  if (!income) {
    alert("Enter income first");
    return;
  }

  const year = Number(yearSelect.value);
  savingsCard.style.display = "block";
  savingsList.innerHTML = "";

  let totalYear = 0;

  for (let m = 0; m < 12; m++) {
    const spent = window.yearlyExpenses[`${year}-${m}`] || 0;
    const saving = income - spent;
    totalYear += saving;

    const li = document.createElement("li");
    li.textContent = `${new Date(0, m).toLocaleString("default", {
      month: "long"
    })}: ₹${saving}`;

    li.className = saving >= 0 ? "positive" : "negative";
    savingsList.appendChild(li);
  }

  totalSavings.innerText = totalYear;
}

/* ================= DELETE ================= */

async function deleteExpense(id) {
  if (!confirm("Delete this expense?")) return;

  await fetch(`${API_EXPENSES}/${id}`, { method: "DELETE" });
  loadDashboard();
}
