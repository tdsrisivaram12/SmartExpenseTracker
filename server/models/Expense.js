const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: String,
  amount: Number,
  category: String,
  date: String
});

module.exports = mongoose.model("Expense", expenseSchema);
