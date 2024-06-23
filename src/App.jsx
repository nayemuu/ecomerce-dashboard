import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AddProduct from './pages/Product-section-pages/AddProduct/AddProduct';
import Category from './pages/Product-section-pages/Category/Category';
import Location from './pages/Product-section-pages/Location/Location';
import ProductList from './pages/Product-section-pages/ProductList/ProductList';
import SubCategory from './pages/Product-section-pages/SubCategory/SubCategory';

import Login from './pages/Login/Login';
import Test from './pages/Test/Test';
import AddUser from './pages/User-Section/AddUser/AddUser';
import UserBiography from './pages/User-Section/UserBiography/UserBiography';
import Users from './pages/User-Section/Users/Users';
import Users2 from './pages/Users/Users2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/subCategory" element={<SubCategory />} />
        <Route path="/location" element={<Location />} />

        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user-biography" element={<UserBiography />} />
        <Route path="/users2" element={<Users2 />} />
        <Route path="/test" element={<Test />} />
        {/* not using /users2 route*/}
      </Routes>
    </Router>
  );
}

export default App;
