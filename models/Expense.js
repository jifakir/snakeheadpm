import mongoose from 'mongoose';

const { Schema } = mongoose;


const expenseSchema = new Schema({
    amount: {type: Number, required: true},
    purpose: {type: String, required: true},
    note: String,
    date: {type: Date, required: true},
    create_at: {type: Date, default: Date.now()},
    contributor: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
});



export default mongoose.models.Expense || mongoose.model('Expense', expenseSchema);
