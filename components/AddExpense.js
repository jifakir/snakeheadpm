import Portal from "@reach/portal";
import { useSession } from 'next-auth/client';
import { useState } from "react";
import { Plus, RefreshCcw } from "react-feather";
import Spinner from "./Spinner";



const AddExpense = ({clicked}) => {

    var event = new Date();
    let getdate = JSON.stringify(event)
    getdate = getdate.slice(1,11);

    const [session, loading] = useSession();

   // Handling error and success
    const [processing, setProcessing] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // Setting form value
    const [amount, setAmount] = useState("");
    const [purpose, setPurpose] = useState("feed");
    const [note, setNote] = useState('');
    const [date, setDate] = useState(getdate);

    console.log(amount, purpose, note, date);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            amount,
            purpose,
            note,
            date,
            contributor: session.user.id
        };

        const setInit = () => {
            setAmount("");
            setPurpose("feed");
            setNote("");
        };

        setProcessing(true);

        fetch('/api/expense', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setInit();
            setProcessing(false);
            const {success} = data;
            console.log(success);
            if(!success){
                console.log("Error", data);
                return setError(true);
            }
            setSubmitted(true);
            console.log("Success", data);
        })
        .catch(err => {
            setInit();
            setProcessing(false);
            setError(true);
            console.log("Error", err);
        });

    };

    const form = (
                    <form onSubmit={onSubmitHandler} className="w-full">
                        <h1 className="text-center font-bold text-2xl text-blue-500 uppercase">Add your expense</h1>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="date">Date</label>
                            <input required  onChange={(e) => setDate(e.target.value)} className="w-full font-bold px-2 py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" defaultValue={date} type="date" name="date" id="date"/>
                        </div>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="amount">Amount</label>
                            <input required placeholder="eg: 2500" onChange={(e) => setAmount(e.target.value)} tabIndex="0" value={amount} className="w-full placeholder-gray-700 font-bold px-2 py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" type="number" name="amount" id="amount"/>
                        </div>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="purpose">Purpose</label>
                            <select required placeholder="eg: purchased fish feed" onChange={(e) => setPurpose(e.target.value)} value={purpose} className="placeholder-gray-700 w-full font-bold px-2 py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" type="text" name="purpose" id="purpose">
                                <option>feed</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="purpose">Note</label>
                            <textarea required placeholder={`eg: ${purpose === "feed" ? "Purchased fish 20 kg" : "Purchased net"}`} onChange={(e) => setNote(e.target.value)} value={note} className="placeholder-gray-700 w-full font-bold px-2 text-sm py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" name="note" id="note">

                            </textarea>
                        </div>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <label className="absolute bg-gray-900 px-2 text-blue-500 text-xs -top-2 left-5" htmlFor="contributor">Contributor</label>
                            <input readOnly value={session.user.username} className="w-full font-bold px-2 py-2 rounded bg-gray-900 text-blue-500 focus:outline-none" />
                        </div>
                        <div className="w-full rounded my-5 relative border border-blue-500">
                            <input className="w-full cursor-pointer font-bold px-2 py-2 rounded uppercase text-gray-900 bg-blue-500 bg-opacity-50 focus:outline-none" type="submit" value="submit expense"/>
                        </div>
                    </form>
    );
    const submit = (
        <div className="w-full text-center my-5">
            <p className="w-full my-5 text-green-500 font-bold text-xl">
               Hurray! Your expense has been saved succesfully.
            </p>
            <button onClick={() => setSubmitted(false)} className="bg-green-500 active:bg-blue-300 uppercase font-bold py-2 px-5 rounded-md focus:outline-none flex items-center mx-auto"><Plus className="mr-2" /> Add More</button>
        </div>
    );
    const err = (
        <div className="w-full text-center my-5">
            <p className="w-full my-5 text-red-500 font-bold text-xl">
               Opps! Your expense has been failed to save.
            </p>
            <button onClick={() => setError(false)} className="bg-red-500 mx-auto flex items-center active:bg-red-300 uppercase font-bold py-2 px-5 rounded-md focus:outline-none"><RefreshCcw className="mr-5" /> try again</button>
        </div>
    );

    return (
        <Portal>
            <div onClick={clicked} className="portal w-full min-h-screen fixed flex justify-center items-center bg-gray-700 shadow-lg bg-opacity-50 top-0 left-0">
                <div onClick={(e) => e.stopPropagation()} className={`w-3/6 m-auto border bg-gray-900 px-10 py-8 rounded-2xl ${submitted ? 'border-green-500' : error ? 'border-red-500' : 'border-blue-500'}`}>
                    
                    {
                        processing ?
                        <Spinner title="Your expense is saving" />:
                        submitted ?
                        submit:
                        error?
                        err:
                        form
                    }
                </div>
                <style jsx>{`
                    .portal{
                        z-index: 2000;
                    }
                `}</style>
            </div>
        </Portal>
    )
};


export default AddExpense;