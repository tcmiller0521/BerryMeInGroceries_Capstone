import express from 'express'
import { addBudget, getBudget } from '../controllers/budget.js';

const router = express.Router();



router.get('/get', getBudget);
router.post('/add', addBudget);
router.patch('/update/:id', )
router.delete('/delete/:id', );

export default router;