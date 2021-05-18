import useSWR from 'swr';
import Spinner from './Spinner';

const Partner = ({item, spent}) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR('/api/expense', fetcher);
    if(!data || error) return <Spinner />;
    const {_id, avatar, first_name} = item;
    const userSpent = data.data.filter(item => item.contributor === _id).reduce((acc, item) => acc + item.amount, 0);
    console.log(userSpent);
    return (
        <div className="w-full bg-gray-800 m-2 rounded-lg min-h-full">
            <div className="p-5">
                <div className="w-full">
                    <img className="h-52 w-full rounded-lg" src={avatar} alt="Avatar"/>
                </div>
                <h2 className="w-full text-center text-gray-500 font-bold uppercase p-2" >
                    {first_name}
                </h2>
                <h1 className="w-full text-white text-center">
                    Spent: &#2547;  <span className="text-blue-500 font-bold">{userSpent}</span>
                </h1>
            </div>
        </div>
    )
};


export default Partner;