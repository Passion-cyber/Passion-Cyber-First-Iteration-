import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Footer,
  RightSocials,
  LeftSocials,
  Homepage,
  Errorpage,
} from "./components";

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
