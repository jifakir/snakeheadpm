import dbConnect from "../../utils/dbConnect";
import User from '../../models/User';


export default async (req, res) => {

    

    const { method } = req;
    const { email, password } = req.body;

    await dbConnect();

    switch(method){
        case 'POST':
            try{
                const user = await User.findOne({email: email});
                if(user.email === email && user.password === password){
                    return res.status(200).json({
                        userId: user._id,
                        username: user.user_name,
                        token: 'jdfkdjkdjkdjdkjd'
                    })
                };
                res.status(400).json({success: "false", message:"email or possword is invalid"})
            }catch (err){
                res.status(400).json({ success: false, message: "Something  went wrong" })
            }
            break;
        default:
            res.status(404).json({message: "Invalid Request"});
    }
}