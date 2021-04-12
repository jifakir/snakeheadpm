import * as Icon from 'react-feather';



const OverviewCard = ({amount, title}) => {

    return (
        <div className="overview bg-gray-800 rounded-xl">
            <div className="w-full px-5 py-7 border-b border-gray-700 flex items-center">
                <div className="px-5">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex justify-center items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-800"></div>
                    </div>
                </div>
                <div className="w-full wrapper flex justify-between">
                    <div className="content">
                        <h1 className="title text-blue-500 text-2xl font-bold">{amount} BDT</h1>
                        <h3 className="sub-title text-white">{title} Expense</h3>
                    </div>
                    <div className="button">
                        <button className="rounded-2xl focus:outline-none flex justify-center items-center  text-green-600 w-10 h-10 bg-green-500 bg-opacity-20"><Icon.ChevronUp /></button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="p-4">
                    <button className="rounded-full px-3 py-1 focus:outline-none text-blue-500 flex hover:bg-blue-500 hover:bg-opacity-10">
                        See all activity <Icon.ArrowRight />
                    </button>
                </div>
            </div>
            <style jsx>{`
                .overview{
                    width: 49%;
                }
            `}</style>
        </div>
    )
};


export default OverviewCard;