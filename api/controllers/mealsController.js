/* eslint-disable class-methods-use-this */
import DbHelper from '../helpers/dbHelper';

class MealsController {
  async getMeals(req, res) {
    const allMealsResponse = await DbHelper.getAllMeals();
    const { success, message, meals } = allMealsResponse;
    res.status(200).send({
      success,
      message,
      meals,
    });
  }
}

const mealsController = new MealsController();

export default mealsController;
