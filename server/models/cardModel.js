import mongoose from 'mongoose'

const CardSchema = mongoose.Schema({
    cardName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: Number,
    },
    storeName: {
        type: String,
    }
})

const CardModel = mongoose.model('CardModel', CardSchema)

export default CardModel;