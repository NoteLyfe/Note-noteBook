import React from 'react'

const NoteItem = (props) => {

  const {note} = props; 

  return (
    <div>
      {note.title}
    </div>
  )
}

export default NoteItem
