import MyExpenseItem from "./MyExpenseItem";
import { ArrowRight } from 'react-feather';
import { useSession } from 'next-auth/client';
import Spinner from "../Spinner";
import useSWR from 'swr';




const MyExpense = () => {

   
    const [session, loading] = useSession();
    if(!session) return (
        <div className="w-full min-h-full md:w-5/12 md:ml-2 rounded-xl flex justify-center items-center  bg-gray-800">
            <h2 className="text-red-500">Unauthenticated user isn't allowed to see this section</h2>
        </div>
    )
    // if(loading) return <Spinner />;

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR('/api/expense', fetcher);

    const userId = session.user.id;
    console.log(userId);
    const myExpenses = data.data.filter(item => item.contributor === userId).slice(0,5);
    
    return (
        <div className="w-full md:w-5/12 md:ml-2 rounded-xl bg-gray-800">
            <div className="w-full h-full p-3 flex flex-col justify-between">
                <header className="w-full py-3 border-b border-gray-700">
                    <h3 className="uppercase text-sm text-gray-500">Expense belongs to me</h3>
                    <h1 className="text-4xl text-white font-bold leading-10">&#2547; 5025225</h1>
                </header>
                <div className="w-full h-full self-start">
                    <h3 className="uppercase text-xs leading-8 text-gray-500">Recent Expense belongs to me</h3>
                    <ul className="w-full">
                        <li className="w-full text-left text-sm text-blue-500 flex justify-between">
                            <div className="w-1/3 uppercase uppercae"> Date </div>
                            <div className="w-1/3 uppercase"> Purpose </div>
                            <div className="w-1/3 text-right uppercase"> Amount </div>
                        </li>
                        {
                            myExpenses.map((item, idx) => <MyExpenseItem 
                                key={idx} 
                                purpose={item.purpose}
                                amount={item.amount}
                                date={item.date} />)
                        }
                    </ul>
                </div>
                <div className="w-full border-t border-gray-700 py-5 self-end">
                    <button className="text-blue-500 focus:outline-none flex">See Details <ArrowRight /> </button>
                </div>
            </div>
        </div>
    )
};



export default MyExpense;