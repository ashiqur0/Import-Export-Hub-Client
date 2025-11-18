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
import ProtectedRoute from "./ProtectedRoute";

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
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/allProducts',
                Component: AllProducts,
            },
            {
                path: '/myExports',
                element: <ProtectedRoute>
                    <MyExports />
                </ProtectedRoute>
            },
            {
                path: '/myImports',
                element: <ProtectedRoute>
                    <MyImports></MyImports>
                </ProtectedRoute>
            },
            {
                path: '/addExports',
                element: <ProtectedRoute>
                    <AddExport />
                </ProtectedRoute>
            },
            {
                path: '/products/productsDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <ProtectedRoute>
                    <ProductDetails></ProductDetails>
                </ProtectedRoute>
            }
        ]
    }
]);

export default router