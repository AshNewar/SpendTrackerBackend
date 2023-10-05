import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
    },

    monthlyIncome: {
        type: 'Number',
        required: true,
    },
    expense: {
        type: Array,
        default: [],
    }

})

const USER = mongoose.model('customer', userSchema);

// const expenseSchema = new mongoose.Schema({
//     name: {
//         type: 'String',
//         required: true,
//     },
//     price: {
//         type: 'Number',
//         required: true,
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "user",
//         required: true,
//     },
// },
//     { timestamps: true }
// )

// const EXPENSE = mongoose.model('expense', expenseSchema);

// export { USER, EXPENSE };

export default USER;