/* eslint-disable class-methods-use-this */
import models from '../../models';


class DBhelper {
  async getAllMeals() {
    try {
      const response = await models.Meals.findAll();
      return { message: 'All meals have been retrieved.', success: true, meals: response };
    } catch (execption) {
      return { message: 'An error has occured.', success: false };
    }
  }
}

const dbhelper = new DBhelper();

export default dbhelper;
