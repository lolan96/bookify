import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing/Landing'
import Library from './library/Library'

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Library" element={<Library/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
