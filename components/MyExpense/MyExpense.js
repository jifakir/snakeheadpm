import MyExpenseItem from "./MyExpenseItem";
import { ArrowRight } from 'react-feather';




const MyExpense = ({data}) => {

    if(!data) return <p className="w-full text-blue-500">Loading</p>;

    const renderData = data.reverse().slice(0,5);

    return (
        <div className="w-5/12 ml-2 rounded-xl bg-gray-800">
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
                            renderData.map((item, idx) => <MyExpenseItem 
                                key={idx} 
                                purpose={item.purpose}
                                amount={item.amount} />)
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