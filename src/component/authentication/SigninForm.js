import React, { useContext, useState } from "react";
import { signin } from "../../service/authenticationService";
import {AuthenticationContext} from "../../contexts/AuthenticationProvider";
import {UserContext} from "../../contexts/UserProvider";

const SigninForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const {setAuthenticationToken} = useContext(AuthenticationContext);
    const {setUserCred} = useContext(UserContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const fetchUser = async () => {
        try {
            const {token,userDto} = await signin(user);
            setAuthenticationToken(token);
            setUserCred(userDto);
        } catch (error) {
            alert("Either password or email is incorrect!")
            console.error(error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetchUser();
    }

    return (
        <div className="bg-blue-400 w-96 m-auto p-4 px-7 rounded">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        className="block mb-2"
                        type="email"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        className="block mb-2"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="bg-green-600 px-4 py-2 rounded-md text-white">Submit</button>
            </form>
        </div>
    )
}

export default SigninForm;
