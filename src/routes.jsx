import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Donate from "./Pages/Donate";
import Donations from "./Pages/Donations";
import Home from "./Pages/Home";
import Imprensa from "./Pages/News";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Recycling from "./Pages/Recycling";
import Transparency from "./Pages/Transparency";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/transparencia" element={<Transparency />} />
        <Route path="/ajudar" element={<Donate />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/doacoes" element={<Donations />} />
        <Route path="/reciclagem" element={<Recycling />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/imprensa" element={<Imprensa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
  // return null;
}
