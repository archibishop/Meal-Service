import express from 'express';
import MealsController from '../controllers/mealsController';
import ValidationMiddleware from '../middleware/validationMiddleware';

const router = express.Router();


// Get Meals
router.get('/api/v1/meals', MealsController.getMeals);

// Create Meal
router.post('/api/v1/meals', ValidationMiddleware, MealsController.createMeals);

// Delete Meal
router.delete('/api/v1/meals/:id', ValidationMiddleware, MealsController.deleteMeal);

export default router;
