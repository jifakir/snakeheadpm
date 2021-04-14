import LatestExpense from '../components/LatestExpense/LatestExpense';
import { useSession } from 'next-auth/client';
import Spinner from '../components/Spinner';

const Analytics = () => {

    
    return (
        <div className="w-full">
            <LatestExpense />
        </div>
    )
};


export default Analytics;