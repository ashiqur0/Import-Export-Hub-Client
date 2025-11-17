import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyExports from "../pages/MyExports";
import MyImports from "../pages/MyImports";
import AddExport from "../pages/AddExport";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Loading from "../components/common/Loading";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:5000/latest-products'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/allProducts',
                Component: AllProducts,
                loader: () => fetch('http://localhost:5000/products'),
                hydrateFallbackElement: <Loading></Loading>
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
            },
            {
                path: '/products/productsDetails/:id',
                Component: ProductDetails
            }
        ]
    }
]);

export default router