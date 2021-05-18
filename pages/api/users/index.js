import User from "../../../models/User";
import dbConnect from '../../../utils/dbConnect';


export default async (req, res) => {

    await dbConnect();

    switch(req.method){

        case 'GET':
            try{
                const foundUsers = await User.find().exec();
                if(foundUsers){
                 return   res.status(200).json({success: true, users: foundUsers});
                }

                return res.status(404).json({success: false, message: 'not found'});
                
            } catch(err) {
                res.status(400).json({success: false, message: err.message});
            }
    }
};