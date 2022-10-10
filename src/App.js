import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteState from './Components/context/NoteState';
import Alert from './Components/Alert';

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
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
