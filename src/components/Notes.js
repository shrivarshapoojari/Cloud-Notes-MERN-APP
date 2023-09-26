import React, { useEffect, useRef } from 'react'
import { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'


const Notes = (props) => {
    const [note, setNote] = useState({id:"", etitle: "", edescription:"",etag:"" });

    const onChange = (e) => {
        setNote({
            ...note, [e.target.name]: e.target.value
        })
    }
    const refclose=useRef(null);
   
    const context = useContext(NoteContext)
    const { notes,getNotes,editNote } = context;
    useEffect(() => {
        getNotes();
    }, [notes])

    const ref = useRef(null);
   
    const updateNote = (currentNote) => {

        setNote({ id:currentNote._id ,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
        ref.current.click();
         
    }
    const handleUpdateNotes = (e) => {
        editNote({id:note.id,title:note.etitle,description:note.edescription,tag:note.etag});
         refclose.current.click();
         props.showAlert("Changes Saved Succesfully",'success')
        

    }

    return (
        <div>
            <AddNote showAlert={props.showAlert}/>


            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">

            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} aria-describedby="emailHelp" onChange={onChange}   />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tags</label>
                                    <input type="text" className="form-control" id="etag" name='etag' aria-describedby="emailHelp" value={note.etag} onChange={onChange} />
                                </div>



                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button"  ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={ note.etitle.length<5 || note.edescription.length<5} className="btn btn-primary" onClick={handleUpdateNotes}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h1>Your Notes</h1>
                <div className="container mx-2">
               {notes.length===0  &&  'No Notes To Display!'}
               </div>
                {notes.map((ele) => {
                    return <NoteItem  key={ele._id}note={ele} updateNote={updateNote} showAlert={props.showAlert}/>
                })}
            </div>
        </div>
    )
}

export default Notes
