import React, {useState,createContext} from "react";

export const UserContext = createContext(null);
export const UserProvider = ({children}) => {
    const [userCred, setUserCred] = useState(null);
    return (
        <UserContext.Provider value={{userCred,setUserCred}}>
            {children}
        </UserContext.Provider>
    )
}
