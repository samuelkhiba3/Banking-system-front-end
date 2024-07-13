import React, {useState,createContext} from "react";

export const AuthenticationContext = createContext();
export const AuthenticationProvider = ({children}) => {
    const [authenticationToken, setAuthenticationToken] = useState("");
    const [userCred, setUserCred] = useState({
        id: null,
        firstName: "",
        lastName:"",
        email:""
    });

    alert(userCred.id)
    return(
        <AuthenticationContext.Provider value={
            {
                authenticationToken,
                setAuthenticationToken,
                userCred,
                setUserCred
            }
        }>
            {children}
        </AuthenticationContext.Provider>
    )
}