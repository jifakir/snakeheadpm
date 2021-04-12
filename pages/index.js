import { useRouter } from "next/router";
import { useEffect } from "react";





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
            <p className="text-blue-500">
                Loading....
            </p>
        </div>
    )
};


export default App;