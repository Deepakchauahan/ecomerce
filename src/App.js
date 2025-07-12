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
import Pagination from './pages/pagination';
import ServerPagination from './pages/serverPagination';
import InfiniteScroll from './pages/infiniteScroll';
import Popover from './pages/popover';
import StarPattern from './pages/starPattern';
import TabPattern from './pages/tabPattern';
import FileFolder from './pages/fileFolder';

function App() {
  return (
    <ProductContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllProduct />} />
          <Route path="/client-pagination" element={<Pagination />} />
          <Route path="/server-pagination" element={<ServerPagination />} />
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/popover" element={<Popover />} />
          <Route path="/start-pattern" element={<StarPattern />} />
          <Route path="/tab-pattern" element={<TabPattern />} />
          <Route path="/file-folder" element={<FileFolder />} />
          <Route path="/add-product" element={<AddProduct />} />
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
