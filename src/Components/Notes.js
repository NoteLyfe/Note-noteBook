import React, {useContext} from 'react'
import NoteContext from '../Components/context/NoteContext'
// import NoteItem from './NoteItem'

const Notes = () => {
    
    const context = useContext(NoteContext);
    // eslint-disable-next-line
    const { notes, setNotes } = context;

    return (
        <div>
            <h1>Your Notes</h1>
            {notes.map((note) => {
                // return <NoteItem note={note}/>;
                return note.id;
            })}
        </div>
    )
}

export default Notes