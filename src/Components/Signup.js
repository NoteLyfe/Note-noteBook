import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import NoteContext from './context/NoteContext';

const Signup = () => {

  const context = useContext(NoteContext)
  const { showAlert } = context

  const [credentials, setCredentails] = useState({ name: '', email: '', password: '', cpassword: '' })
  let navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/login")
      showAlert('User Sign up SuccessFully', 'success')
    } else {
      showAlert('Invalid Credentials', 'danger')
    }
  }

  const onChange = (e) => {
    setCredentails({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container" style={{ maxWidth: '45%' }}>
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            name='name'
            required
            minLength={5}
            onChange={onChange} />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            onChange={onChange} />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            required
            minLength={5}
            onChange={onChange} />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name='cpassword'
            required
            minLength={5}
            onChange={onChange} />
        </div>
        <button
          type="submit"
          className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
