// App.js

import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import ImageSlider from './component/ImageSlider';
import Login from './component/Login';
import Signup from './component/Signup';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homes from './component/Homes';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/addProduct' && <Navbar />}
      {location.pathname === '/' && <ImageSlider />}
      <Routes>
      
        <Route path="/home" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path='/home/editProduct/:id' element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homes" element={<Homes/>} />
      </Routes>
    </>
  );
}

export default App;
