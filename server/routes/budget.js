import express from 'express'
import { addBudget, getBudget, updateBudget, deleteBudget } from '../controllers/budget.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/get', getBudget);
router.post('/add', addBudget);
router.patch('/update/:id', updateBudget )
router.delete('/delete/:id', deleteBudget);

export default router;