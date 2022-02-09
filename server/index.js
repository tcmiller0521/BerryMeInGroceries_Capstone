import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import itemRoutes from './routes/item.js';
import listRoutes from './routes/list.js'

const app = express();

const PORT = 5000
const CONNECTION_URL = 'mongodb://localhost:27017'

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/items', itemRoutes);
app.use('/list', listRoutes);


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e));