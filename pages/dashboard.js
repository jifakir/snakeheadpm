import React, { useEffect, useState } from 'react';
import  useSWR  from 'swr';
import { useRouter } from 'next/router';
import * as Icon from 'react-feather';
import AddExpense from '../components/AddExpense';
import ExpenditureGraph from '../components/ExpenditureGraph';
import MyExpense from '../components/MyExpense/MyExpense';
import OverviewCard from '../components/OverviewCard';
import Spinner from '../components/Spinner';
import { useSession } from 'next-auth/client';



const Dashboard = () => {
    // Handling expense adder
    const [session, loading] = useSession();
    const router = useRouter();
    
    useEffect(() => {
        if(!session & !loading) return router.push('/login')
    }, session);

     const [addExpense, setAddExpense] = useState(false);

     // Setting expense handler
    const addExpenseHandler = () => {
        if(!session){
            return alert('Sorry! you are not logged in. Log in then try to add expense.')
        }
        setAddExpense(prev => !prev);
    };

    // fetching data
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR('/api/expense', fetcher);

    // Show the state of data fetching... 
    if(error) return <p className="w-full text-center text-red-500">Loading failed!</p>;
    if(!data) return <Spinner title="Page loading" />;

    // Setting corresponding data
   
    const totalCost = data.data.reduce((acc, val) => acc + val.amount, 0);
   
    
    
    return (
        <div className="w-full py-5">
            <header className="">
                <h3 className="uppercase text-sm text-gray-500 font-bold">Overview</h3>
                <div className="w-full flex flex-col md:flex-row justify-between">
                    <div className="font-bold mb-2">
                        <h1 className="text-white text-2xl">Welcome, {session ? session.user.name : 'Unknown'}</h1>
                        <h3 className="text-gray-500 tracking-wide text-sm">
                            Here's what's happening with your projects today
                        </h3>
                    </div>
                    <div className="add-item">
                        <button onClick={addExpenseHandler} className="rounded-full focus:outline-none active:bg-blue-400 bg-blue-500 flex items-center text-white text-sm py-2 px-4">
                            <Icon.Plus size={15} className="mr-2" />
                            Add Expense
                        </button>
                        {addExpense && <AddExpense clicked={addExpenseHandler} />}
                    </div>
                </div>
                <div className="pt-5 flex flex-col md:flex-row md:justify-between">
                    <OverviewCard amount={totalCost} title="Total" />
                    <OverviewCard amount="15000" title="Last Month" />
                </div>
                <div className="w-full pt-5 flex flex-col md:flex-row md:justify-between">
                    <ExpenditureGraph />
                    <MyExpense  />
                </div>
            </header>
        </div>
    )
};

export default Dashboard;