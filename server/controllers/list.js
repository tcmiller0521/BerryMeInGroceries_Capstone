import mongoose from 'mongoose';
import ListModel from '../models/listModel.js';

export const getLists = async (req, res) => {
    try {
        const groceryLists = await ListModel.find();

        res.status(200).json(groceryLists);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const createList = async (req, res) => {
    const list = req.body
    const newList = new ListModel({...list})
    try {
        await newList.save();
        res.status(201).json(newList)
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const updateList = async (req, res) => {
    const { id } = req.params
    const { listName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No list with id: ${id}`)

    const updatedList = { listName, _id: id }

    await ListModel.findByIdAndUpdate(id, updatedList, { new: true });

    res.json(updatedList);
};

export const deleteList = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);

    await ListModel.findByIdAndRemove(id);

    res.json({ message: "Item deleted successfully."})
}