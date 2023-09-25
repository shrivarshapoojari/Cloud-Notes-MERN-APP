import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
const NoteItem = (props) => {
    const {note,updateNote} = props;
    const context=useContext(NoteContext);
    const{deleteNote}=context;


    return (
        <div className='col-md-3'>
            <div className="card my-3">

                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>

                </div>
            </div>


        </div>
    )
}

export default NoteItem
