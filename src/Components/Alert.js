import React, { useContext } from 'react'
import Context from './context/NoteContext'

const Alert = (props) => {

    const context = useContext(Context)
    const { alert } = context

    return (
        <>
            {alert && <div className={`alert alert-${alert.status}`} style={{ width: "60%", margin: 'auto' }} role="alert">
                {alert.status}: {alert.msg}
            </div>}
        </>
    )
}

export default Alert
