import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useState } from 'react';
import annyang from 'annyang';

  

const AddNote = (props) => {

    const context = useContext(NoteContext);
    
    const { addNote } = context;
     
    let user=localStorage.getItem('user');
    // console.log(user);
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
    const isButtonDisabled = (note.title.length < 5 || note.description.length < 5) && (note.title!==" "||note.tag!==" "||note.title!==" ");
    const handleAddNotes = async(e) => {
        e.preventDefault();
        
        
        let obj = {
            title: note.title,
            description: note.description,
            tag: note.tag
        }
        
         await addNote(obj);
        props.showAlert("Successfully Added New Note",'success')
         setNote({
            title:" ",
            description:" ",
            tag:" "
        })
        
    }
    
   const handleDeSpeech=()=>{
      if(annyang){
        annyang.setLanguage('en-IN');
        annyang.start();
        annyang.addCallback('result', handleSpeech);
        }
   }
const abortSpeech=()=>{
    annyang.abort();

}
    
   const handleSpeech = (userSaid) => {
      setNote({
        ...note,description:userSaid+" "
      })
         
 
    }
   
   


    return (
        <div>
            <div>
                <h1>Welcome {user}</h1>
                <div className="container my-3">
                    <h1>Add a Note </h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} value={note.title}  />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <i className="fa-solid fa-microphone mx-3" onClick={handleDeSpeech}></i>
                            <i className="fa-solid fa-square mx-3" onClick={abortSpeech}></i>
                            <textarea className="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={onChange}  value={note.description} rows={4}/>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tags</label>
                            <input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" onChange={onChange}  value={note.tag}  />
                        </div>


                        <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleAddNotes} title={isButtonDisabled ? "Title and Description must be at least 5 characters long" : "" }>Add Note</button>
                       <div className="container" style={{height:"10px"}}>
                        {isButtonDisabled && (
                              <p style={{ color: 'red' }}>
                            Title and Description must be at least 5 characters long
                                  </p>)}
                        </div>
                        
                    </form>
                </div>
             
            </div>

        </div>
    )
}

export default AddNote
