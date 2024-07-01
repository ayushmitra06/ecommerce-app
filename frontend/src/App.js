import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import Checkout from './components/Checkout/Checkout';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import ThankYouPage from './components/CheckoutForm/Thankyou';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/CheckoutForm' element={<ThankYouPage/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
