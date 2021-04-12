import { useRouter } from "next/router";




const DrawerItem = ({title, pathname, children}) => {
    const router = useRouter();
    return (
        <div 
        onClick={() => router.push(pathname)} 
        className={`w-full hover:bg-blue-500 hover:bg-opacity-30 hover:text-blue-500 cursor-pointer rounded-lg flex items-center ${pathname === router.pathname ? 'text-blue-500': null}`}>
            <span className="pl-2 icon-name inline-block text-md">{children}</span>
            <h2 className="px-2 py-3 inline-block">
                {title}
            </h2>
        </div>
    )
};



export default DrawerItem;