import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing.jsx";
import Library from "./library/Library.jsx";
import Footer from "./Footer.jsx";
import Nav from "./landing/components/Nav.jsx";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/landing" element={<Landing/>} /> */}
          <Route path="/Library" element={<Library />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
