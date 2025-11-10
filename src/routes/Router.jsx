import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyExports from "../pages/MyExports";
import MyImports from "../pages/MyImports";
import AddExport from "../pages/AddExport";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/allProducts',
                Component: AllProducts
            },
            {
                path: '/myExports',
                Component: MyExports
            },
            {
                path: '/myImports',
                Component: MyImports
            },
            {
                path: '/addExports',
                Component: AddExport
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
]);

export default router