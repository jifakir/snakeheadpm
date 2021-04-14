import { signOut, useSession } from "next-auth/client";
import { useRouter } from 'next/router';
import { Menu } from "react-feather";



const Navigation = ({menuClicked}) => {
    const [session, loading] = useSession();
    const router = useRouter();
    return (
        <nav className="w-full fixed bg-gray-800 text-white font-bold border-b border-gray-600">
            <div className="px-4 mx-auto py-4   flex justify-between">
                <div className="md:hidden cursor-pointer" onClick={menuClicked} ><Menu /></div>
                <div className="logo-wrapper hidden md:block uppercase text-green-500">spm</div>
                <div className="flex">
                    <div className="px-4">Search</div>
                    <div className="px-4">Notification</div>
                    <div className="px-4">{session ? <button onClick={() => signOut()} className="focus:outline-none" >Logout</button> : <button onClick={() => router.push('/login')} className="focus:outline-none">Login</button>}</div>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;