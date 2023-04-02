import ScrollToTop from "components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBudy from "./pages/PageBody";
import ErrorPage from "pages/ErrorPage";
import Home from "pages/Home";
import About from "pages/About";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<PageBudy />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;