import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteState from './Components/context/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container" style={{ marginTop: '60px' }}>
            <Alert  />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
