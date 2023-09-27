import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

 
 const UserState = (props) => {

    const [username,setUsername]=useState(null);

     const setuser=(word)=>{
        setUsername(word);
     }

   return (
    <UserContext.Provider value={{username,setuser}}>
    {props.children}
    </UserContext.Provider>

   )
 }
 
 export default UserState
 