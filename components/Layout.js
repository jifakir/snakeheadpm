import Navigation from './Navigation';
import SideDrawer from './SideDrawer/SideDrawer';



const Layout = ({children}) => {


    return (
    <div className="w-full min-h-screen bg-gray-900">
      <Navigation />
      <div className="w-full flex">
        <SideDrawer />
        <div className="main-body w-full px-5 py-10">
            {children}
        </div>
      </div>
      <style jsx>{`
        .main-body{
            width: calc(100% - 280px);
            min-height: calc(100vh - 57px);
            margin-left: 280px;
            margin-top: 57px;
        }
      `}</style>
    </div>
    )
};


export default Layout;