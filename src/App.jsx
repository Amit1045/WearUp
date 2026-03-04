
import './App.css'
import Nav from './Navbar/Nav'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Women from './pages/Women'
import Man from './pages/Man'
import Trending from './pages/Trending'
import Products from './pages/Products'
import PurchasePage from './pages/PurchasePage'
import Cart from './pages/Cart'
import PaymentPage from './pages/PaymentPage'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Man />} />
        <Route path='/trending' element={<Trending />} />
        <Route path="/selectProduct" element={<Products />} />
        <Route path="/product/:id" element={<PurchasePage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pay' element = {<PaymentPage />} />
      </Routes>
    </div>
  )
}

export default App
