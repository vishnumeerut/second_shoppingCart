import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import ProductList from "../Pages/ProductList/ProductList";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";

function MainRoutes () {
    return (
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/products" element={<ProductList />}/>
            <Route  path="/products/:id" element={<ProductDetails />}/>
            <Route  path="/signin" element={<Login />}/>
            <Route  path="/signup" element={<Signup />}/>
            <Route  path="/cart/:userId" element={<Cart />}/>
            <Route  path="/checkout" element={<Checkout />}/>
            <Route  path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;