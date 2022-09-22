import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  return (
    <div className="app-container">
    <Video />
    <Router>
      <Header />
        <Routes>           
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
