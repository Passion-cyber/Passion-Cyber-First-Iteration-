import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
// import Footer from './components/Footer';
import Errorpage from "./pages/Errorpage/Errorpage";
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div classname="overlay"></div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
     
    </div>
  );
}

export default App;
