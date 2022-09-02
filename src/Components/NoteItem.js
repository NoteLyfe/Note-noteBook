import React, { useContext } from 'react'
import NoteContext from './context/NoteContext';

const NoteItem = (props) => {

  const { note } = props;

  const context = useContext(NoteContext);
  const {deleteNote} = context

  const edit = () => {
    console.log('edit button clicked')
  }

  return (

    <div className="card col-md-3 mx-1 my-1" key={note.id}>
      <div className="card-body">
        <div className="d-flex align-item-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-pen-to-square" style={{cursor: "pointer"}} onClick={edit}></i>
          <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}} style={{cursor: "pointer"}}></i>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>

  )
}

export default NoteItem
