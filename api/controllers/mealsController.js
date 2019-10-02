/* eslint-disable class-methods-use-this */
import DbHelper from '../helpers/dbHelper';

class MealsController {
  async getMeals(req, res) {
    console.log(req.route.methods.get);
    const allMealsResponse = await DbHelper.getAllMeals();
    const { success, message, meals } = allMealsResponse;
    res.status(200).send({
      success,
      message,
      meals,
    });
  }

  async createMeals(req, res) {
    // const allMealsResponse = await DbHelper.getAllMeals();
    // const { success, message, meals } = allMealsResponse;
    const { mealObj } = req.body;
    const createdMealsResponse = await DbHelper.createMeals(mealObj);
    const { success, message, meal } = createdMealsResponse;
    res.status(200).send({
      success,
      message,
      meal,
    });
  }

  async deleteMeal(req, res) {
    const { id } = req.params;
    const deleteMealResponse = await DbHelper.deleteMeal(id);
    const { success, message } = deleteMealResponse;
    res.status(200).send({
      success,
      message,
    });
  }
}

const mealsController = new MealsController();

export default mealsController;
