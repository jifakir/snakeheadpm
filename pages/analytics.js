import LatestExpense from '../components/LatestExpense/LatestExpense';
import { useSession } from 'next-auth/client';
import Spinner from '../components/Spinner';
import SeoTag from '../components/SeoTag';

const Analytics = () => {

    
    return (
        <div className="w-full">
            <SeoTag pageTitle="Analytics" />
            <LatestExpense />
        </div>
    )
};


export default Analytics;