# CampusFlow – Smart Expense & Savings Tracker with Real-Time Financial Intelligence

 CampusFlow is a full-stack web application developed for the HackOverflow Hackathon (IIT Goa) with a clear goal:
 to help users understand, control, and improve their financial habits using simple, accurate, and realistic insights.

 Unlike basic expense trackers that only store numbers, CampusFlow focuses on financial clarity — showing where money goes, how much is saved or lost, and whether spending behavior is healthy.

##  What CampusFlow Does
### CampusFlow enables users to:

 - Add expenses for any date (past or present)

 - View expenses month-wise using a calendar

 - Instantly see monthly expense totals

 - Compare expenses with monthly income

 - Automatically calculate monthly savings or loss

 - Track yearly savings month-by-month

 - See net yearly savings (loss months reduce total)

 - Understand spending behavior using a realistic Expense Intelligence Score

 - Manage data for multiple users independently
     ######  Each user’s income, expenses, and analytics are stored and computed independently

 - The application is designed for real daily-life usage, not just demo purposes.

### 👤 User Flow
 - Simple registration and login

 - Each user has isolated data (no cross-user mixing)

 - Logout supported

 - Authentication is intentionally simplified for hackathon demo clarity (clearly stated)
##
### 💸 Expense Management
- Add expenses with:

      - Title

      - Amount

      - category

      - Date

- Delete expenses instantly

- UI updates immediately after add/delete (no stale data)

- Works correctly for past months and years

### 📅 Calendar View
- Monthly calendar showing daily spending

- Each day displays total amount spent

- Clicking a date shows all expenses of that day

- Works for previous months and years using month/year selectors

## 📊 Analytics & Insights
### Monthly Summary
    - Total monthly expenses

    - Monthly savings or loss (Income − Expenses)

 ### Category Analysis
    - Category-wise pie chart for clear spending distribution

### Yearly Savings View
    - Shows all 12 months

    - Each month displays savings or loss

    - Final net yearly savings calculated correctly

    - Loss months reduce the total (no fake positives)

### Expense Intelligence Score (Accurate & Realistic)
 #### The intelligence is derived from real financial ratios, not predictions or assumptions, making the insights explainable and trustworthy
The score is based on actual financial logic, not random values.

### Formula Used:
    - Spending Percentage
     (Monthly Expense / Monthly Income) × 100

    - Score Calculation
    Score = 100 − (Spending Percentage × 0.9)

### Constraints:
- Score is bounded between 10 and 95

- Prevents unrealistic 0 or 100 values

- Updates dynamically when income or expenses change

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

## 📁 Project Structure
    -   CampusFlow/
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
### Hackathon Context
  This project was developed for the HackOverflow Hackathon conducted by IIT Goa.

#### Primary focus areas:

  - Practical usefulness

  - Clean and understandable implementation

  - Correct financial logic

  - Smooth and intuitive user experience

## 👥 Team
#### Project Design & Development:
   - ### THOTA D SRI SIVA RAM

#### Video Presentation:
   - ### KOLUKULURI SATYA NAGENDRA

## ✅ Final Note
CampusFlow is not just an expense tracker —
it is a decision-support tool that helps users clearly see:

 - How they spend

 - How they save or lose

 - How healthy their financial habits are

The project is built with accuracy, realism, and everyday usability in mind.
