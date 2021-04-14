import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import Spinner from '../Spinner';


const LatestItem = ({item}) => {

    const {date, purpose, note, amount, contributor} = item;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const refinedDate = new Date(date);
    const m = months[refinedDate.getMonth()];
    const d = refinedDate.getDate();
    

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR(`/api/users/${contributor}`, fetcher);

    if(!data) return <Spinner />
    
    return (
        <div className="w-full py-2 ">
            <div className="p-2 flex justify-between border-b border-gray-800">
                <div className="w-1/5 flex flex-col md:flex-row date">
                    <span>{m}</span>
                    <span className="hidden md:block">-</span>
                    <span>{d}</span>
                </div>
                <div className="w-2/5 md:flex flex-row">
                    <div className="w-full md:w-1/3 purpose">
                        {purpose}
                    </div>
                    <div className="w-full md:w-2/3 note">
                        <p className="text-xs md:text-base">{note}</p>
                    </div>
                </div>
                <div className="w-1/5 text-right">
                    &#2547; {amount} BDT
                </div>
                <div className="w-1/5 text-gray-400 text-right">
                        <h3 className="text-xs md:text-base">Contributed by {data ? data.user.user_name : 'loading..'}</h3>
                </div>
            </div>
        </div>
    )
};


export default LatestItem;