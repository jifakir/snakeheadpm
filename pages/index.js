import { useRouter } from "next/router";
import { useEffect } from "react";
import SeoTag from "../components/SeoTag";





const App = () => {
    const users = {user: null, loading: false};
    const router = useRouter();
    useEffect(() => {
        if(!(users.user || users.loading)){
            router.push('/dashboard')
        }
    });
    return (
        <div className="w-full">
            <SeoTag pageTitle="Home" />
            <p className="text-blue-500">
                Loading....
            </p>
        </div>
    )
};


export default App;