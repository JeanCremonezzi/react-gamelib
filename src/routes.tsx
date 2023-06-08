import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { CadastroPage } from "./pages/cadastro";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <CadastroPage/>,
    }
]);

export const Routes = () => {
    return <RouterProvider router={router}/>
}