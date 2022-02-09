import express from 'express'
import { deleteList, createList, updateList, getLists } from '../controllers/list.js';

const router = express.Router();

router.get('/get', getLists);
router.post('/add', createList);
router.patch('/update/:id', updateList)
router.delete('/delete/:id', deleteList);

export default router;