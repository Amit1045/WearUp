
import './App.css'
import Nav from './Navbar/Nav'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Women from './pages/Women'
import Man from './pages/Man'
import Trending from './pages/Trending'
import Products from './pages/Products'
import PurchasePage from './pages/PurchasePage'

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
      </Routes>
    </div>
  )
}

export default App
