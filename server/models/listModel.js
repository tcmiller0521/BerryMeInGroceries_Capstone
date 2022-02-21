import mongoose from 'mongoose'

const ItemSchema = mongoose.Schema({
    listName: {
        type: String,
        required: true,
    }
})

const ListModel = mongoose.model('ListModel', ItemSchema)

export default ListModel;