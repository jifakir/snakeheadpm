import DrawerItem from '../SideDrawer/DrawerItem';
import * as Icon from 'react-feather';
import { useSession } from 'next-auth/client';



const SideDrawer = ({drawerOpen}) => {

    const [session, loading] = useSession();

    return (
        <div className={`side-drawer ${drawerOpen ? '': 'hidden'} md:block bg-gray-800 fixed left-0 border-r border-gray-600`}>
            <div className="side-drawer w-full min-h-full flex flex-col justify-between" >
                <div className="w-full p-5 border-b border-gray-600">
                    <div className="rounded-md p-3 flex justify-center items-center bg-gray-900 border-b border-gray-600">
                        <div className="rounded-full overflow-hidden w-12 h-12  mx-2">
                            <img src={session ? session.user.image : ""} alt=""/>
                        </div>
                        <div className="wrapper">
                            <h1 className="text-white font-bold">{session ? session.user.name : 'Unknown User'}</h1>
                            <h3 className="text-gray-500">Partner</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full px-5 py-7 text-gray-500 font-bold">
                    <DrawerItem title="Overview" pathname="/dashboard">
                        <Icon.BarChart />
                    </DrawerItem>
                    <DrawerItem title="Analytics" pathname="/analytics">
                        <Icon.PieChart />
                    </DrawerItem>
                    <DrawerItem title="Finance" pathname="/finance">
                        <Icon.DollarSign />
                    </DrawerItem>
                    <DrawerItem title="Account" pathname="/account">
                        <Icon.User />
                    </DrawerItem>
                </div>
                <div className="w-full p-5 text-gray-500 border-t border-b border-gray-500">
                    <p>&copy; coded and designed by jifakir</p>
                </div>
            </div>
            <style jsx>{`
                .side-drawer{
                    top: 57px;
                    width: 280px;
                    min-height: calc(100vh - 57px);
                    max-height: calc(100vh - 57px);
                    z-index: 500;
                }
            `}</style>
        </div>
    )
};


export default SideDrawer;