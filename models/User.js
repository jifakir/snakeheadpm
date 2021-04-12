import mongoose from 'mongoose';

const {Schema} = mongoose;


const userSchema = new Schema({
    user_name: {type: String, unique: true, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    avatar: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String, required: true, minlength: 6},
    role: {type: String, required:true},
    expenses: [{type: Schema.Types.ObjectId, required: true, ref: 'Expense'}] 
});


export default mongoose.models.User || mongoose.model('User', userSchema);