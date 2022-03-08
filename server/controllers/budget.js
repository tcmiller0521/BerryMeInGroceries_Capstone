import mongoose from 'mongoose';
import BudgetModel from '../models/budgetModel.js';

export const getBudget = async (req, res) => {
    try {
        const budgetList = await BudgetModel.find();

        res.status(200).json(budgetList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const addBudget = async (req, res) => {
    const budget = req.body
    const newBudget = new BudgetModel({...budget})
    try {
        await newBudget.save();
        res.status(201).json(newBudget)
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const updateBudget = async (req, res) => {
    const { id } = req.params
    const { budgetName, spent, remaining } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`)

    const updatedBudget = { budgetName, spent, remaining, _id: id }

    await BudgetModel.findByIdAndUpdate(id, updatedBudget, { new: true });

    res.json(updatedBudget);
};

export const deleteBudget = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);

    await BudgetModel.findByIdAndRemove(id);

    res.json({ message: "Item deleted successfully."})
}