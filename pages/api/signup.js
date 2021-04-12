import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {

    const { method } = req;
    const { user_name, first_name, last_name, email, password } = req.body;

    console.log(req.body);

    await dbConnect();

    switch(method){
        case 'POST':
            try{
                const existedUser = await User.findOne({email: email});
                if(existedUser){
                    return res.status(409).json({success: false, message: "Email or Username already exists"});
                }
                const createUser = new User({
                    user_name,
                    first_name,
                    last_name,
                    avatar: 'https://wallpaperaccess.com/full/281077.jpg',
                    email,  
                    password,
                    role: 'partner',
                    expenses: [] 
                });
                const createdUser = await createUser.save();
                res.status(201).json({success: true, user: createdUser});
            }catch(err){
                res.status(400).json({success: false, message: err.message})
            }
            break;
        default:
            return res.status(400).json({message: "Invaid Request, Please check your request type."});
    }
}