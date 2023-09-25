import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useState } from 'react';

const AddNote = () => {

    const context = useContext(NoteContext)
    const { addNote } = context;

    const [note,setNote] = useState({
        title:" ",
        description:" ",
        tag:" "
    })
    const onChange = (e) => {
        setNote({
            ...note, [e.target.name]: e.target.value
        })
    }

    const handleAddNotes = async(e) => {
        e.preventDefault();
        console.log('start')
        console.log(note.tag)
        let obj = {
            title: note.title,
            description: note.description,
            tag: note.tag
        }
        console.log(obj)
         await addNote(obj);
        console.log('end')
    }



    return (
        <div>
            <div>
                <div className="container my-3">
                    <h1>Add a Note </h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tags</label>
                            <input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" onChange={onChange} />
                        </div>


                        <button type="submit" className="btn btn-primary" onClick={handleAddNotes}>Add Note</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddNote
