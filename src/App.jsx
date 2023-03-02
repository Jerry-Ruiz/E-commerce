import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import Cart from './pages/Cart'
import ProtectedUserLogged from './components/App/ProtectedUserLogged'
import Navbar from './components/Layout/Navbar'
import { useEffect } from 'react'
import { getAllCardProducts } from './store/slice/cart.slice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCardProducts())
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={< Product />} />
        <Route element={<ProtectedUserLogged />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
