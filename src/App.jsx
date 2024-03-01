import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AddProduct from './pages/Product-section-pages/AddProduct/AddProduct';
import Category from './pages/Product-section-pages/Category/Category';
import Location from './pages/Product-section-pages/Location/Location';
import ProductList from './pages/Product-section-pages/ProductList/ProductList';
import SubCategory from './pages/Product-section-pages/SubCategory/SubCategory';
import Users from './pages/Users/Users';
import Users2 from './pages/Users/Users2';

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

        <Route path="/users" element={<Users />} />
        <Route path="/users2" element={<Users2 />} />
      </Routes>
    </Router>
  );
}

export default App;
