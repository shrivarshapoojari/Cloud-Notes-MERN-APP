import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props) => {


    const s1={
        name: "shri",
        class: "5b"

    }
    const [state, setState] = useState(s1);
    
    
    return (
        <NoteContext.Provider value={{state}}>
            {props.children}
        </NoteContext.Provider>

    )


}

export default NoteState