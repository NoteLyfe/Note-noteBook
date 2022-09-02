import React from 'react'

const Alert = (props) => {
    return (
        <div className="alert alert-success" style={{width: "60%", margin:'auto'}} role="alert">
            {props.msg}
        </div>
    )
}

export default Alert
