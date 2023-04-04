import ScrollToTop from "components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBudy from "./pages/PageBody";
import ErrorPage from "pages/ErrorPage";
import Home from "pages/Home";
import About from "pages/About";
import Projetos from "pages/Projects";
import Transparency from "pages/Transparency";
import Donate from "pages/Donate";
import Contact from "pages/Contact";

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<PageBudy />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/transparencia" element={<Transparency />} />
                    <Route path="/ajudar" element={<Donate />} />
                    <Route path="/contato" element={<Contact />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;