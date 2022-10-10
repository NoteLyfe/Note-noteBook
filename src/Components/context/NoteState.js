import React, { useState } from "react";
import NoteContext from './NoteContext'

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //Add Note
  const addNote = async (title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDA2M2VkOWEzOWY1OTkwZDA2NGFiIn0sImlhdCI6MTY2NTQwMjUyOH0.IEpmX7uY7nBx0hsRqXrPzfJBSYm6z6JTh9E7QguD6Zs"
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json()
    setNotes(notes.concat(note))
  }

  //Fetch all Note
  const fetchnotes = async () => {
    //Api call
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDA2M2VkOWEzOWY1OTkwZDA2NGFiIn0sImlhdCI6MTY2NTQwMjUyOH0.IEpmX7uY7nBx0hsRqXrPzfJBSYm6z6JTh9E7QguD6Zs"
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  //Delete Note
  const deleteNote = async (id) => {
    //Api call
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDA2M2VkOWEzOWY1OTkwZDA2NGFiIn0sImlhdCI6MTY2NTQwMjUyOH0.IEpmX7uY7nBx0hsRqXrPzfJBSYm6z6JTh9E7QguD6Zs"
      }
    });

    //Deleting Notes from client
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
    showAlert('Note Deleted Successfully', 'danger')
  }

  //Edit Note
  const editNote = async (id, title, description, tag) => {
     //Api call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDA2M2VkOWEzOWY1OTkwZDA2NGFiIn0sImlhdCI6MTY2NTQwMjUyOH0.IEpmX7uY7nBx0hsRqXrPzfJBSYm6z6JTh9E7QguD6Zs"
      },
      body: JSON.stringify({title, description, tag})
    }); 
    const json = response.json()
  
    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }

  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      status: status
    })

    setTimeout(() => {
      setAlert("")
    }, 1000);
  }
  const [alert, setAlert] = useState(null)

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, showAlert, alert, fetchnotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
