import { Outlet } from "react-router-dom";
import Rodape from "components/Rodape";
import Header from "../../components/Header";

export default function CorpoDaPagina() {
    return (
        <>
            <Header />
            <Outlet />
            <Rodape />
        </>
    )
}