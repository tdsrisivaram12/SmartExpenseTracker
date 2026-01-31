# CampusFlow – Unified Campus Event & Budget Management Module

CampusFlow is a full-stack web application developed for the **HackOverflow Hackathon (IIT Goa)**.
It represents a **core analytics and budget-management module** of a **Unified Campus Resource & Event Management System**.

The project focuses on **event-level financial workflows**, providing organizers and administrators
with **clear, actionable insights** into budget usage, expenses, and spending health.

Rather than replacing all campus tools at once, CampusFlow demonstrates how **one critical subsystem**
can be designed cleanly, securely, and scalably to integrate into a larger unified campus platform.

---

## 🎯 Alignment with Problem Statement 1

CampusFlow directly supports the objectives of **Problem Statement 1** by addressing:

- Centralized event-related financial management
- Organizer-driven workflows with admin-level oversight
- Actionable analytics for decision-making
- Scalable architecture that can integrate with clubs, resources, and approvals

---

## 🔐 Authentication & Authorization

- Secure email/password-based authentication
- Each user operates in an isolated data scope
- Designed to support role-based access (Admin / Organizer) at the architectural level

> Note: OTP, OAuth, and advanced RBAC are planned extensions and intentionally excluded
> from this demo to maintain clarity, stability, and correctness.

---

## 👤 User Profiles & Community Context

- Each authenticated user represents a **club or event organizer**
- User-specific budgets, expenses, and analytics are computed independently
- The system is structured to support extension into multi-club memberships and profiles

---

## 📅 Event Lifecycle & Budget Management

CampusFlow supports the **financial lifecycle of campus events**, including:

- Event budget allocation
- Expense tracking across any date (past or present)
- Continuous monitoring of budget consumption
- Calculation of remaining budget or budget overuse
- Post-event financial summaries

This maps to:
- Draft → Active → Completed event financial states
- Budget-aware event management workflows

---
##  What CampusFlow Does
- Prevents unrealistic 0 or 100 values

- Updates dynamically when Budget or expenses change

### Interpretation:
- Low spending → higher score

- High spending → lower score

- Spending above income → critical warning shown

- This makes the score believable, stable, and judge-acceptable.

##  Technologies Used
### Frontend
- HTML

- CSS

- JavaScript

- Chart.js

### Backend
- Node.js

- Express.js

- MongoDB

- Mongoose

## 📊 Analytics & Insights Dashboard

The platform provides **real-time analytics**, including:

- Monthly expense totals
- Budget vs expense comparison
- Remaining budget or loss calculation
- Yearly budget usage summaries
- Expense Intelligence Score indicating spending health

These insights enable administrators and organizers to:
- Detect overspending early
- Review financial discipline
- Make data-driven decisions for future events

---

## 📁 Project Structure
      CampusFlow
      │
      ├── client/
      │   ├── index.html
      │   ├── login.html
      │   ├── register.html
      │   ├── dashboard.html
      │   ├── add-expense.html
      │   ├── script.js
      │   └── style.css
      │
      ├── server/
      │   ├── server.js
      │   ├── package.json
      │   ├── package-lock.json
      │   ├── routes/
      │   │   └── expenseRoutes.js
      │   └── models/
      │       └── Expense.js
      │
      └── README.md
## How to Run the Project
### Backend
    - cd server
    - npm install
    - node server.js
### Server runs at:
http://localhost:5000
### Frontend
#### Open:  
        client/index.html
in any modern browser.

### Important Notes
 - node_modules is not uploaded (standard practice)

 - All dependencies install via npm install

 - Authentication is simplified intentionally for demo clarity

 - Complete working flow is demonstrated in the video submission
###  🧠 Hackathon Context
  This project was developed for the HackOverflow Hackathon conducted by IIT Goa.

#### Primary Focus Areas
- Practical usefulness in real campus workflows

- Clean and understandable implementation

- Correct and realistic financial logic

- Smooth, intuitive user experience

- Honest scope with scalable system design

## 👥 Team
#### Project Design & Development:
   - ### THOTA D SRI SIVA RAM

#### Video Presentation:
   - ### KOLUKULURI SATYA NAGENDRA

## ✅ Final Note
CampusFlow is not just an expense tracker.

It is a decision-support and analytics module that demonstrates how
financial intelligence can be integrated into a unified campus event and resource management system.

The project is built with accuracy, realism, scalability, and everyday usability in mind.


