



const MyExpenseItem = ({purpose, amount}) => {

    return (
        <li className="w-full flex text-left items-center text-sm leading-8 text-gray-500 justify-between">
            <div className="w-1/3 uppercase"> Apr-9 </div>
            <div className="w-1/3 text-sm"> {purpose} </div>
            <div className="w-1/3 text-right"> &#2547; {amount} </div>
        </li>
    )
};


export default MyExpenseItem;