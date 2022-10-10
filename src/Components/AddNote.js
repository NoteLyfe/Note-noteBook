import React, { useState } from 'react'
import NoteContext from '../Components/context/NoteContext'
import { useContext } from 'react'

const AddNote = () => {

    const context = useContext(NoteContext);
    const { addNote, showAlert } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        showAlert('Note Added Successfully', 'success')
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>

            <h1 className='text-center'>Add a Note</h1>

            <form className='container' style={{ width: "60%" }}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Title</label>
                    <input type="text" onChange={onChange} id="title" name='title' className="form-control title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Description</label>
                    <input type="text" onChange={onChange} name='description' className="form-control description" id="description" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="text" className="form-label">Tag</label>
                    <input type="text" onChange={onChange} name='tag' className="form-control tag" id="tag" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

            <hr className="container" style={{ width: "80%" }} />

        </div>
    )
}

export default AddNote
