import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Products from "./pages/Product";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { productsData } from "./api/api";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path="/homepage"
          element={<Homepage />}
          loader={productsData}
        ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-Poppins">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
