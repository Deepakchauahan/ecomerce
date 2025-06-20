import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/addProduct';
import Home from './pages/home';
import ProductContext from './components/context/productContext';
import AllProduct from './pages/allProduct';
import Header from './components/common/layout/Header';
import WishlistProduct from './pages/wishlistProduct';
import SingleProduct from './pages/singleProduct';
import ProductCart from './pages/productCart';

function App() {
  return (
    <ProductContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/product-wishlist" element={<WishlistProduct />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path={`/edit-product/:id`} element={<AddProduct />} />
          <Route path={`/product/:id`} element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductContext>

  );
}

export default App;
