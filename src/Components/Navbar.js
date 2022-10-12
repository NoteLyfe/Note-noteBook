import React from 'react'
import { useLocation, Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate
    
    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    let location = useLocation()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NOTE-NoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>

                        </ul>
                        {(! localStorage.getItem('token')) ?
                            <div>
                                <Link to='/login' className="btn btn-primary mx-1" type="submit">Log In</Link>
                                <Link to='/signup' className="btn btn-primary mx-1" type="submit">Sign Up</Link>
                            </div> :
                            <button className="btn btn-primary mx-1" onClick={logOut} >Log Out</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
