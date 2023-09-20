const MealController = require("../controllers/meals.controller");

module.exports = (app) => {
  //* Establish each CRUD operation routes below:

  app.get("/api/meals", MealController.allMeals);

  app.get("/api/meals/:id", MealController.oneMeal);

  app.post("/api/meals", MealController.createMeal);

  app.put("/api/meals/:id", MealController.updateMeal);

  app.delete("/api/meals/:id", MealController.deleteMeal);
};
