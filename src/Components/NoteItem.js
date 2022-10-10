import React, { useContext } from 'react'
import NoteContext from './context/NoteContext';

const NoteItem = (props) => {

  const { note, updateNote } = props;

  const context = useContext(NoteContext);
  const {deleteNote} = context

  return (

    <div className="card col-md-3 mx-1 my-1" key={note.id}>
      <div className="card-body">
        <div className="d-flex align-item-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-pen-to-square mx-2 mt-1" style={{cursor: "pointer"}} onClick={() => {updateNote(note)}}></i>
          <i className="fa-solid fa-trash-can mx-1 mt-1" onClick={()=>{deleteNote(note._id)}} style={{cursor: "pointer"}}></i>
        </div>
        <h6 className="card-text text-capitalize">{note.tag}</h6>
        <p className="card-text">{note.description}</p>
      </div>
    </div>

  )
}

export default NoteItem
