import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { CadastroPage } from "../pages/cadastro";
import { GamesPage } from "../pages/games";
import { ErrorPage } from "../pages/error";
import { LandingNav } from "../components/landingNav";
import { CollectionPage } from "../pages/collection";

export const Router = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <LandingNav/>

                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/register" element={<CadastroPage/>}/>
                    <Route path="/games" element={<GamesPage/>}/>
                    <Route path="/collection" element={<CollectionPage/>}/>

                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}