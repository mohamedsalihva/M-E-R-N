import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/navbar/Navbar';
import Loginpage from './components/loginpage/Loginpage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/Loginpage" element={<Loginpage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
