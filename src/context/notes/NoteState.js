import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props) => {


    const notesInitial=[
        {
            "_id": "651057997bcc6a45830e7975",
            "user": "650dcc2a8c1691158941a20e",
            "title": "first note",
            "description": "my description",
            "tag": "test",
            "date": "2023-09-24T15:36:57.592Z",
            "__v": 0
        },
        {
            "_id": "651057997bcc6a45830e7975",
            "user": "650dcc2a8c1691158941a20e",
            "title": "first note",
            "description": "my description",
            "tag": "test",
            "date": "2023-09-24T15:36:57.592Z",
            "__v": 0
        },
        {
            "_id": "651057997bcc6a45830e7975",
            "user": "650dcc2a8c1691158941a20e",
            "title": "first note",
            "description": "my description",
            "tag": "test",
            "date": "2023-09-24T15:36:57.592Z",
            "__v": 0
        },
        {
            "_id": "651057997bcc6a45830e7975",
            "user": "650dcc2a8c1691158941a20e",
            "title": "first note",
            "description": "my description",
            "tag": "test",
            "date": "2023-09-24T15:36:57.592Z",
            "__v": 0
        }
    ] 
    
    const [notes,setNotes]=useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>

    )


}

export default NoteState