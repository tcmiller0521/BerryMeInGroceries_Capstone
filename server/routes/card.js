import express from 'express'
import { addCard, getCards, updateCard, deleteCard } from '../controllers/card.js';

const router = express.Router();

router.get('/get', getCards);
router.post('/add', addCard);
router.patch('/update/:id', updateCard )
router.delete('/delete/:id', deleteCard);

export default router;