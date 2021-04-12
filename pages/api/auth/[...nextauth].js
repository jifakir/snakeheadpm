import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import User from '../../../models/User';
import dbConnect from '../../../utils/dbConnect';


export default  NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            async authorize(credentials) {
                await dbConnect();
                
                const { email, password} = credentials;
                let user;
                const findUser = await User.findOne({email: credentials.email}).exec();
                if(findUser.email === email && findUser.password === password){
                    const {_id, first_name, last_name, avatar, user_name} = findUser;
                    user = { 
                        id: _id, 
                        name: first_name + ' ' + last_name,
                        image: avatar,
                        username: user_name
                    }
                };
                
                if(user) return user;
                return false;
            },

        }),
    ],
    callbacks: {
        async jwt(token, user, account, profile, isNewUser){
            user && (token.user = user);
            return token;
        },

        async session(session, user){
            session.user = user.user
            return session;
        }
    }
});