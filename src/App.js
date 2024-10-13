import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Principal from './components/auth/Principal';
import Reserva from './components/reservation/Reserva';
const App = () => {
    return (
        <Router>
            <nav>
              <Link to="/reserva">Inicio</Link>
            </nav>
            <Routes>
              <Route path="/" exact element={<Principal/>}/>
              <Route path="/reserva" element={<Reserva/>}/>
            </Routes>
        </Router>
    );
};

export default App;

