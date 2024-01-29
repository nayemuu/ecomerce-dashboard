import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Category from './pages/Product-section-pages/Category/Category';
import ProductList from './pages/Product-section-pages/ProductList/ProductList';
import AddProduct from './pages/Product-section-pages/AddProduct/AddProduct';
import SubCategory from './pages/Product-section-pages/SubCategory/SubCategory';
import Location from './pages/Product-section-pages/Location/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/subCategory" element={<SubCategory />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
