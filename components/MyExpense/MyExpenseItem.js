



const MyExpenseItem = ({date, purpose, amount}) => {
    console.log(date);
    const refinedDate = new Date(date);
    console.log('Date',refinedDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = refinedDate.getDate();
    console.log(d);
    const m = months[refinedDate.getMonth()];
    console.log(m);
    const tDate = m + '-' + d;
    console.log(tDate);
    return (
        <li className="w-full flex text-left items-center text-sm leading-8 text-gray-500 justify-between">
            <div className="w-1/3 uppercase"> {tDate} </div>
            <div className="w-1/3 text-sm"> {purpose} </div>
            <div className="w-1/3 text-right"> &#2547; {amount} </div>
        </li>
    )
};


export default MyExpenseItem;