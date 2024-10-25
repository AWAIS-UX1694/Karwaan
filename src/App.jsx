import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Karwaan/components/header'
import Home from './Karwaan/pages/Home/home'
import Brand from './Karwaan/pages/Brand/brand'
import AllProduct from './Karwaan/pages/AllProduct/allproduct'
import ProductDetail from './Karwaan/pages/ProductDetail/productdetail'
import LogIn from './Karwaan/Register/Login'
import SignUp from './Karwaan/Register/SignUp'
import Cart from './Karwaan/pages/Cart/cart'
// import MenCollection from './Karwaan/pages/Men/menCollection'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/brand' element={<Brand/>} />
          <Route path='/allproduct' element={<AllProduct/>} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path='/men' element={<MenCollection/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
