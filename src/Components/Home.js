import Notes from './Notes'

const Home = () => {

  return (
    <div>
      <h1 className='text-center'>Add a Note</h1>

      <form className='container' style={{width: "60%"}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter E-mail'/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <hr/>

      <Notes />

    </div>
  )
}

export default Home
