import ScrollToTop from "components/ScrollToTop";
import Inicio from "pages/Inicio";
import PaginaDeErro from "pages/PaginaDeErro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CorpoDaPagina from "./pages/CorpoDaPagina";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoDaPagina />}>
                    <Route index element={<Inicio />} />
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;