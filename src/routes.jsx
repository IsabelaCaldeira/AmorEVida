import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
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
