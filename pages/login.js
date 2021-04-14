import Portal from '@reach/portal';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';




const Login = ({clicked}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const router = useRouter();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            email, 
            password,
            callbackUrl: `${window.location.origin}/dashboard`,
            redirect: false,
        } );
        if(res.error) return setError(true);
        if(res.url) router.push(res.url);
    };

    return (
        <Portal>
            <div onClick={clicked} className="portal w-full min-h-screen fixed flex justify-center items-center bg-gray-800 shadow-lg bg-opacity-70 top-0 left-0">
                <div onClick={(e) => e.stopPropagation()} className="w-5/6 md:w-2/6  m-auto bg-gray-900 px-10 py-8 rounded-2xl">
                    <h1 className="text-center font-bold text-2xl text-blue-500 uppercase">Login</h1>
                    {
                        error && <h2 className="text-center font-bold text-xs text-red-500">Login failed! Invalid email or password</h2>
                    }
                    <form onSubmit={onSubmitHandler} className="w-full">
                        <div className={`w-full rounded my-5 relative border ${error ? 'border-red-500': 'border-blue-500'}`}>
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="date">Email</label>
                            <input placeholder="example@spm.com"  onChange={(e) => setEmail(e.target.value)} className="w-full font-bold placeholder-gray-700 px-2 py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" tabIndex="0" value={email} type="email" />
                        </div>
                        <div className={`w-full rounded my-5 relative border ${error ? 'border-red-500': 'border-blue-500'}`}>
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="amount">Password</label>
                            <input placeholder="********** " onChange={(e) => setPassword(e.target.value)}  value={password} className="w-full placeholder-gray-700 font-bold px-2 py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" type="password" />
                        </div>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <input className="w-full cursor-pointer font-bold px-2 py-2 rounded uppercase text-gray-900 bg-blue-500 bg-opacity-50 focus:outline-none" type="submit" value="Enter"/>
                        </div>
                    </form>
                </div>
                <style jsx>{`
                    .portal{
                        z-index: 2000;
                    }
                `}</style>
            </div>
        </Portal>
    )
};


export default Login;