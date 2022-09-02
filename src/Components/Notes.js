import React, { useContext } from 'react'
import NoteContext from '../Components/context/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem'

const Notes = () => {

    const context = useContext(NoteContext);
    const { notes, addNote } = context;

    return (
        <>
            <AddNote />
            <div className="container">
                <div className='row my-3 justify-content-center'>
                    <h2 className='text-center'>Your Notes</h2>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} />;
                    })}
                </div>
            </div>

        </>
    )
}

export default Notes