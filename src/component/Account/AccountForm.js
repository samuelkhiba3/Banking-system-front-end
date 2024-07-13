import react, {useState,useContext,useEffect} from "react";

const AccountForm=() => {

    const [accountCred, setAccountCred] = useState({
        userId: null,
        initialDeposit: 0
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setAccountCred({...accountCred, [name]: value});
    }

    useEffect(() => {
        const handleSubmit = (event) => {
            event.preventDefault();
        }
    })


    return (
        <div className="bg-blue-400 w-96 m-auto p-4 px-7 rounded">
            <form className="" onSubmit>
                <div className="">
                    <label>Deposit</label>
                    <input className="block mb-2" type="number" name="initialDeposit"
                           value={accountCred.initialDeposit} onChange={handleInputChange} required/>
                </div>
                <button type="submit" className="bg-green-600 px-4 py-2 rounded-md text-white ">Submit</button>
            </form>
        </div>
    )
}

export default AccountForm;