const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minLength: [3, "Meals name must be 2+ characters"],
    },
    date: {
      type: Date,
      required: [true, "Date is required."],
    },
  },
  { timestamps: true }
);

const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;
