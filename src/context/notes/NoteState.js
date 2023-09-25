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


    // Add note
    const addNote=(title,description,tag)=>
    {   const  note= {
        "_id": "651057997bcc6a45830e7975",
        "user": "650dcc2a8c1691158941a20e",
        "title": title,
        "description":description,
        "tag": tag,
        "date": "2023-09-24T15:36:57.592Z",
        "__v": 0
    }
           setNotes(notes.concat(note));
    }

 


    // Delete Notes
     const deleteNote=()=>{

     }


    // Edit Notes
  const editNote=()=>{
  }


    
    return (
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>

    )


}

export default NoteState