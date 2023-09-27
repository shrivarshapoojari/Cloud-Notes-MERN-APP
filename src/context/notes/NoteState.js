import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const host = "http://localhost:5000"
const NoteState = (props) => {


    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)
    const [noteCount,setNoteCount]=useState(0);

    // fetch all notes

    const getNotes = async () => {

        //------------------------------------------------API CALL--------------------------------------------------

        const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json()

        setNotes(json);
       let num= notes.length;
       setNoteCount(num);
    }



    let obj = {
        title: notes.title,
        description: notes.description,
        tag: notes.tag
    }




    // Add note
    const addNote = async (obj) => {

        //------------------------------------------------API CALL--------------------------------------------------

        const response = await fetch("http://localhost:5000/api/notes/addnotes", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(obj),
        });
        const json = await response.json()
        

    }




    // Delete Notes
    const deleteNote = async (id) => {

        //------------------------------------------------API CALL--------------------------------------------------

        const response = await fetch(`http://localhost:5000/api/notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json()




        // front end

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes)
    }


    // Edit Notes----------------------------------------------------------------------------------------
    const editNote = async ({ id, title, description, tag }) => {

        // api call----------------------------------------------------------------------------------------------------------

        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json()



        // logic to display on client side

        for (let index = 0; index < notes.length; index++) {
            const ele = notes[index];
            if (ele._id === id) {
                ele.title = title;
                ele.description = description;
                ele.tag = tag;

            }
        }
    }




    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes,noteCount }}>
            {props.children}
        </NoteContext.Provider>

    )


}

export default NoteState