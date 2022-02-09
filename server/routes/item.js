import express from 'express'

const router = express.Router();

import { addItem, deleteItem, getItems, updateItem } from '../controllers/item.js';

router.get('/get', getItems);
router.post('/add', addItem);
router.patch('/update/:id', updateItem)
router.delete('/delete/:id', deleteItem);

export default router;