import React, {useState,createContext} from "react";

export const AuthenticationContext = createContext(null);
export const AuthenticationProvider = ({children}) => {
    const [authenticationToken, setAuthenticationToken] = useState("");

    return(
        <AuthenticationContext.Provider value={
            {
                authenticationToken,
                setAuthenticationToken,
            }
        }>
            {children}
        </AuthenticationContext.Provider>
    )
}