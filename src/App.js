import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Navbar,
  Footer,
  Homepage,
  Errorpage,
} from "./components";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    return () => {
      AOS.refresh();
    };
  }, []);
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
