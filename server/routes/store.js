import express from 'express'
import { addStore, getStore, deleteStore, updateStore } from '../controllers/store.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/get', getStore);
router.post('/add', addStore);
router.patch('/update/:id', updateStore )
router.delete('/delete/:id', deleteStore);

export default router;