import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Usuarios from './views/Usuarios';
import Camareros from './views/Camareros';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container my-5">
          <Routes>
            <Route path="/" element={<h2 className="text-center">¡Benvingut/da!</h2>} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/camareros" element={<Camareros />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white text-center p-3">
           La Meva Aplicació de Birres
        </footer>
      </div>
    </Router>
  );
}

export default App;

