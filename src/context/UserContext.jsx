import { createContext, useState } from "react";


export const UserContext=createContext();

export const UserContextProvider=({children})=>{
    const [userAuth,setUserAuth]=useState(JSON.parse(localStorage.getItem('AuthUser')) || null);
    

    return(
        <UserContext.Provider value={{
            userAuth,
            setUserAuth
        }}>
            {children}
        </UserContext.Provider>
    )

}