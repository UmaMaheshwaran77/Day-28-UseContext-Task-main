import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
import { UserProvider } from './contex/userContex';
import Home from './Home';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
    <UserProvider>
<NavBar></NavBar>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Routes>

    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
