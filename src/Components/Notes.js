import React, {useContext} from 'react'
import noteContext from '../Components/context/NoteState'
// import NoteItem from './NoteItem'

const Notes = () => {
    
    const context = useContext(noteContext);
    console.log(context)
    // eslint-disable-next-line
    const { notes, setNotes } = context;

    return (
        <div>
            <h1>Your Notes</h1>
            {notes.map((note) => {
                // return <NoteItem note={note}/>;
                return note.title;
            })}
        </div>
    )
}

export default Notes