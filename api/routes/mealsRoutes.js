import express from 'express';
import MealsController from '../controllers/mealsController';

const router = express.Router();


// Get Meals
router.get('/api/v1/meals', MealsController.getMeals);

export default router;
