import mongoose from 'mongoose'

const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    price: {
        type: Number
    },
    user: {
        type: String,
    },
    listName: {
        type: String,
    }
})

const ItemModel = mongoose.model('ItemModel', ItemSchema)

export default ItemModel;