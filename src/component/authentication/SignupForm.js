import{useState,useContext} from "react";
import {signup} from "../../service/authenticationService";
import {AuthenticationContext} from "../../contexts/AuthenticationProvider";
import {UserContext} from "../../contexts/UserProvider";

const SignupForm = () =>{
    const [user, setUser] = useState({
        lastName: "",
        firstName: "",
        email: "",
        password: ""
    });
    const {setUserCred} = useContext(UserContext);
    const {setAuthenticationToken} = useContext(AuthenticationContext);

    const fetchUser = async ()=>{
        try {
            const {token,userDto} = await signup(user);
            setUserCred(userDto);
            setAuthenticationToken(token);
        } catch (error) {
            alert("User already exists in the system");
            console.error(error);
        }
    }
    const handleInputChange=(event)=>{
        const {name , value} = event.target;
        setUser({...user, [name]:value});
    }

    const handleSubmit= async (event)=>{
        event.preventDefault();
        await fetchUser();
    }


    return(
        <div className="bg-blue-400 w-96 m-auto p-4 px-7 rounded">
            <form className="" onSubmit = {handleSubmit}>
                <div className="">
                    <label>First Name</label>
                    <input className="block mb-2" type="text" name="firstName" value={user.firstName} onChange={handleInputChange} required/>
                </div>
                <div className="">
                    <label>Last Name</label>
                    <input className="block mb-2" type="text" name="lastName" value={user.lastName} onChange={handleInputChange} required/>
                </div>
                <div className="">
                    <label>Email</label>
                    <input className="block mb-2" type="email" name="email" value={user.email} onChange={handleInputChange} required/>
                </div>
                <div className="">
                    <label>Password</label>
                    <input className="block mb-2" type="password" name="password" value={user.password} onChange={handleInputChange} required/>
                </div>
                <button type="submit" className="bg-green-600 px-4 py-2 rounded-md text-white ">Submit</button>
            </form>
        </div>
    )
}
export default SignupForm;