import mongoose from 'mongoose'

const BudgetSchema = mongoose.Schema({
    budgetName: {
        type: String,
        required: true,
    },
    remaining: {
        type: Number,
    },
    spent: {
        type: Number,
    },
})

const BudgetModel = mongoose.model('BudgetModel', BudgetSchema)

export default BudgetModel;