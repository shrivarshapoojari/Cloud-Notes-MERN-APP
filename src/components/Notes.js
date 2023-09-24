import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'


const Notes = () => {


    const context = useContext(NoteContext)
    const { notes, setNotes } = context;
    return (
        <div>
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
