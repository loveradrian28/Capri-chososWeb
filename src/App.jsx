import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Contact from './pages/Contact';

// El widget de Eleva ya no vive aquí.
// Se carga directamente desde index.html via script tag —
// ver el bloque "ELEVA AI WIDGET" al final de index.html.

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-cosmic to-carbon">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
