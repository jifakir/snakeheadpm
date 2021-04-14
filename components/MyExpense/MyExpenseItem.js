



const MyExpenseItem = ({date, purpose, amount}) => {
   
    const refinedDate = new Date(date);
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = refinedDate.getDate();
    
    const m = months[refinedDate.getMonth()];
    
    const tDate = m + '-' + d;
    
    return (
        <li className="w-full flex text-left items-center text-sm leading-8 text-gray-500 justify-between">
            <div className="w-1/3 uppercase"> {tDate} </div>
            <div className="w-1/3 text-sm"> {purpose} </div>
            <div className="w-1/3 text-right"> &#2547; {amount} </div>
        </li>
    )
};


export default MyExpenseItem;