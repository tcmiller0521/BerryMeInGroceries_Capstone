import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import itemRoutes from './routes/item.js';
import listRoutes from './routes/list.js';
import budgetRoutes from './routes/budget.js';
import cardRoutes from './routes/card.js';
import storeRoutes from './routes/store.js';
import userRoutes from './routes/user.js';

const app = express();

const PORT = 5000
const CONNECTION_URL = 'mongodb://localhost:27017'

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/items', itemRoutes);
app.use('/list', listRoutes);
app.use('/budget', budgetRoutes);
app.use('/card', cardRoutes);
app.use('/store', storeRoutes);
app.use('/user', userRoutes)


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e));