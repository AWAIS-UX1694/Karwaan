import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Karwaan/components/header'
import Home from './Karwaan/pages/Home/home'
import Brand from './Karwaan/pages/Brand/brand'
import AllProduct from './Karwaan/pages/AllProduct/allproduct'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/brand' element={<Brand/>} />
          <Route path='/allproduct' element={<AllProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
