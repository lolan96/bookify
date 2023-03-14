import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing/Landing'
import Library from './library/Library'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Library" element={<Library/>} />
          </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
