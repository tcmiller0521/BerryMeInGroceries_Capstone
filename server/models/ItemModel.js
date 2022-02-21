import mongoose from 'mongoose'

const ItemSchema = mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    store: {
        type: String,
    },
    username: {
        type: String,
    },
    listName: {
        type: String,
    }
})

const ItemModel = mongoose.model('ItemModel', ItemSchema)

export default ItemModel;