import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { CadastroPage } from "./pages/cadastro";
import { GamesPage } from "./pages/games";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <CadastroPage/>,
    },
    {
        path: "/games",
        element: <GamesPage/>,
    }
]);

export const Routes = () => {
    return <RouterProvider router={router}/>
}