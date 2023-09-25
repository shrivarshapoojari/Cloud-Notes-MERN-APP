import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'


const Notes = () => {


    const context = useContext(NoteContext)
    const { notes, setNotes ,addNote} = context;
    return (
        <div>
            <AddNote/>
            <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((ele) => {
                    return <NoteItem note={ele}/> 
                })}
            </div>
        </div>
    )
}

export default Notes
