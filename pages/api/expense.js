import mongoose from 'mongoose';
import dbConnect from '../../utils/dbConnect';
import Expense from '../../models/Expense';
import User from '../../models/User';


export default async (req, res) => {

  await dbConnect();

  const { method } = req;
  const {date, amount, purpose, note, contributor} = req.body;

  switch(method){
    // GET Request
    case 'GET':
      try{
        const expenses = await Expense.find().exec();
        res.status(200).json({success: true, data: expenses.reverse()})
       } catch (err) {
          res.status(400).json({message: false });
        }
      break;
      // Post requset 
    case 'POST':

      try{
        // validating user
        const user = await User.findById(contributor);

        if(!user){
          return res.status(400).json({success: false, message: "User doesn't found by provided id."});
        };
        // Creating expense model
        const createExpense = new Expense({
          date,
          amount,
          purpose,
          note,
          contributor
        });
        // Saving the model and pushing the model's id into "User"
          const sess = await mongoose.startSession();
          sess.startTransaction();
          const createdExpense = await createExpense.save({session: sess});
          user.expenses.push(createdExpense._id);
          await user.save({session: sess});
          await sess.commitTransaction();
          await sess.endSession();
          return res.status(201).json({success: true, data: createdExpense});

      }catch(err){
        res.status(400).json({success: false, message: err.message})
      };
      break;
    default:
      return res.status(403).json({success: false, message: 'Invalid Request'});
  }
};
