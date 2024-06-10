import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Shimmer from "../Components/ShimmerUi/Shimmer";

const HomeLazy = lazy(() => import("../Pages/Home"));
const ProductListLazy = lazy(() => import("../Pages/ProductList/ProductList"));
const ProductDetailsLazy = lazy(() =>
  import("../Pages/ProductDetails/ProductDetails")
);
const LoginLazy = lazy(() => import("../Pages/Authentication/Login"));
const SignupLazy = lazy(() => import("../Pages/Authentication/Signup"));
const CartLazy = lazy(() => import("../Pages/Cart/Cart"));
const CheckoutLazy = lazy(() => import("../Pages/Checkout/Checkout"));
const ErrorLazy = lazy(() => import("../Pages/Error"));
function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Shimmer />}>
            <HomeLazy />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<Shimmer />}>
            <ProductListLazy />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<Shimmer />}>
            <ProductDetailsLazy />
          </Suspense>
        }
      />
      <Route
        path="/signin"
        element={
          <Suspense fallback={<Shimmer />}>
            <LoginLazy />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Shimmer />}>
            <SignupLazy />
          </Suspense>
        }
      />
      <Route
        path="/cart/:userId"
        element={
          <Suspense fallback={<Shimmer />}>
            <CartLazy />
          </Suspense>
        }
      />
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Shimmer />}>
            <CheckoutLazy />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Shimmer />}>
            <ErrorLazy />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
