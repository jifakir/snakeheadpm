import { useEffect, useState } from "react";
import useSWR from 'swr';
import Partner from "../components/Partner"
import Spinner from "../components/Spinner";




const Finance = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR('/api/users', fetcher);
    if(!data || error) return <Spinner />;

    return (
        <div className="w-full flex flex-col md:flex-row justify-between">
            {
                data.users.map((item, idx) => <Partner item={item} />)
            }
        </div>
    )
};


export default Finance;