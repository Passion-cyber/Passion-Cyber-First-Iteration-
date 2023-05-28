import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Errorpage from "./pages/Errorpage/Errorpage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="global-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
