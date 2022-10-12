import React, { useContext, useEffect } from 'react'
import Context from './context/NoteContext'

const Alert = () => {

    const context = useContext(Context)
    const { alert } = context

    return (
        <>
            {alert && <div className={`text-capitalize alert alert-${alert.status}`} style={{ width: "60%", margin: 'auto' }} role="alert">
                {alert.status}: {alert.msg}
            </div>}
        </>
    )
}

export default Alert
