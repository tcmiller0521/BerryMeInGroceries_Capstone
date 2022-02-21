import mongoose from 'mongoose';
import StoreModel from '../models/storeModel.js';

export const getStore = async (req, res) => {
    try {
        const storeList = await StoreModel.find();

        res.status(200).json(storeList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const addStore = async (req, res) => {
    const store = req.body
    const newStore = new StoreModel({...store})
    try {
        await newStore.save();
        res.status(201).json(newStore)
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const updateStore = async (req, res) => {
    const { id } = req.params
    const { storeName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`)

    const updatedStore = { storeName, _id: id }

    await StoreModel.findByIdAndUpdate(id, updatedStore, { new: true });

    res.json(updatedStore);
};

export const deleteStore = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);

    await StoreModel.findByIdAndRemove(id);

    res.json({ message: "Item deleted successfully."})
}