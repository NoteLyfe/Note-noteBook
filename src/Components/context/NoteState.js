import React, { useState } from "react";
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const notesInitial = [
        {
            "id": "1",
            "user": "note",
            "title": "personal",
            "date": "2021-09-02"
        },
        {
            "id": "2",
            "user": "notelyfe",
            "title": "personal",
            "date": "2021-09-02"
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;