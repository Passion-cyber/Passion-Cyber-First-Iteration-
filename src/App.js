import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Errorpage from "./pages/Errorpage/Errorpage";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import RightSocials from "./components/RightSocials";
import LeftSocials from "./components/LeftSocials";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <LeftSocials />
        <div className="global-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <RightSocials />

        <Footer />
      </Router>
    </>
  );
}

export default App;
