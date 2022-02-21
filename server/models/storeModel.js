import mongoose from 'mongoose'

const StoreSchema = mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
})

const StoreModel = mongoose.model('StoreModel', StoreSchema)

export default StoreModel;