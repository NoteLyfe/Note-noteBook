import React, { useContext, useRef, useEffect, useState } from 'react'
import NoteContext from '../Components/context/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem'

const Notes = () => {

    const context = useContext(NoteContext);
    const { notes, fetchnotes, editNote, showAlert } = context;
    useEffect(() => {
        fetchnotes()
    }, [])

    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        showAlert('Note Edited Successfully', 'success')
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    }
    const ref = useRef(null)
    const refClose = useRef(null)

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "" })

    return (
        <>
            <AddNote />

            <button hidden type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Title</label>
                                <input type="text" onChange={onChange} id="etitle" name='etitle' className="form-control title" 
                                value={note.etitle}
                                required minLength={5}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Description</label>
                                <input type="text" onChange={onChange} name='edescription' className="form-control description" id="edescription" 
                                value={note.edescription}
                                required minLength={5}/>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="text" className="form-label">Tag</label>
                                <input type="text" onChange={onChange} name='etag' className="form-control tag" id="etag" 
                                value={note.etag}
                                required minLength={5}/>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='row my-3 justify-content-center'>
                    <h2 className='text-center'>Your Notes</h2>
                    {notes.length === 0 && "No Notes to display"}
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                    })}
                </div>
            </div>

        </>
    )
}

export default Notes