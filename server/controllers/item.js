import mongoose from 'mongoose';
import ItemModel from "../models/ItemModel.js";

export const getItems = async (req, res) => {
    try {
        const itemList = await ItemModel.find();

        res.status(200).json(itemList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const addItem = async (req, res) => {
    const item = req.body
    const newItem = new ItemModel({...item})
    try {
        await newItem.save();
        res.status(201).json(newItem)
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const updateItem = async (req, res) => {
    const { id } = req.params
    const { item, price } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`)

    const updatedItem = { item, price, _id: id }

    await ItemModel.findByIdAndUpdate(id, updatedItem, { new: true });

    res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);

    await ItemModel.findByIdAndRemove(id);

    res.json({ message: "Item deleted successfully."})
}