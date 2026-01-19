const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

/* ADD EXPENSE */
router.post("/add", async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json({ message: "Expense added" });
});

/* GET EXPENSES (USER-WISE) */
router.get("/:userId", async (req, res) => {
  const expenses = await Expense.find({ userId: req.params.userId });
  res.json(expenses);
});

/* DELETE EXPENSE */
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

module.exports = router;
