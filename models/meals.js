
module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    meal_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {});
  Meals.associate = function (models) {
    // associations can be defined here
  };
  return Meals;
};
