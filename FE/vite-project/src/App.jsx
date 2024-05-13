import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products/Products";
import Basket from "./pages/Basket/Basket";
import WishList from "./pages/WishList/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<WishList />} />
   
          
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
