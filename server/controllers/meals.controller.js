const Meal = require("../models/meals.model");

//! Get All
module.exports.allMeals = (req, res) => {
  Meal.find()
    .then((mealList) => res.json(mealList))
    .catch((err) => res.status(400).json(err));
};

//! Get One
module.exports.oneMeal = (req, res) => {
  Meal.findOne({ _id: req.params.id })
    .then((oneMeal) => res.json(oneMeal))
    .catch((err) => res.status(400).json(err));
};

//! Create
module.exports.createMeal = (req, res) => {
  Meal.create(req.body)
    .then((newMeal) => res.json(newMeal))
    .catch((err) => res.status(400).json(err));
};

//! Update
module.exports.updateMeal = (req, res) => {
  Meal.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedMeal) => res.json(updatedMeal))
    .catch((err) => res.status(400).json(err));
};

//! Delete
module.exports.deleteMeal = (req, res) => {
  Meal.deleteOne({ _id: req.params.id })
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json(err));
};
