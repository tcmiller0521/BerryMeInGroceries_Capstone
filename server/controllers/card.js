import mongoose from 'mongoose';
import CardModel from '../models/cardModel.js';

export const getCards = async (req, res) => {
    try {
        const cardList = await CardModel.find();

        res.status(200).json(cardList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const addCard = async (req, res) => {
    const card = req.body
    const newCard = new CardModel({...card})
    try {
        await newCard.save();
        res.status(201).json(newCard)
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const updateCard = async (req, res) => {
    const { id } = req.params
    const { cardName, cardNumber } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`)

    const updatedCard = { cardName, cardNumber, _id: id }

    await CardModel.findByIdAndUpdate(id, updatedCard, { new: true });

    res.json(updatedCard);
};

export const deleteCard = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);

    await CardModel.findByIdAndRemove(id);

    res.json({ message: "Item deleted successfully."})
}