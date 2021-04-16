import Spinner from '../Spinner';
import LatestItem from './LatestItem';
import useSWR from 'swr';


const LatestExpense = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR('/api/expense', fetcher);

    if(!data) return <Spinner title="Loading..." />
    
    const totalPage = Math.ceil(data.data.length/10);


    return (
        <div className="w-full rounded-lg">
            <div className="w-full p-5 text-gray-600">
                <h1 className=" text-blue-500 font-bold uppercase">Latest Expenses</h1>
                <div className="w-full">
                    {   
                        data.data.map((item, idx) => <LatestItem key={idx} item={item} />)
                    }
                </div>
            </div>
        </div>  
    )
};

export default LatestExpense;