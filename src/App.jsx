
import './App.css'
import Nav from './Navbar/Nav'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Women from './pages/Women'
function App() {

  return (
   <div>
    <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/women' element={<Women />} />
       </Routes>    
    </div>
  )
}

export default App
