
import './App.css'
import Nav from './Navbar/Nav'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Women from './pages/Women'
import Man from './pages/Man'
import Trending from './pages/Trending'
function App() {

  return (
   <div>
    <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Man />} />
        <Route path='/trending' element={<Trending />} />
       </Routes>    
    </div>
  )
}

export default App
