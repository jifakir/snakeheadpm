import User from "../../../models/User";



export default async (req, res) => {

    const {user} = req.query;
    switch(req.method){

        case 'GET':
            try{
                const foundUser = await User.findById(user).exec();
                if(foundUser){
                 return   res.status(200).json({success: true, user: foundUser});
                }

                return res.status(404).json({success: false, message: 'not found'});
                
            } catch(err) {
                res.status(400).json({success: false, message: err.message});
            }
    }
};