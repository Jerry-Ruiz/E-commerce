import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { products } = useSelector(store => store.cart)

  return (
    <nav>
      <Link to="/"><h2>E-commerce</h2></Link>
      <div>
        <Link to="/login"><i className='bx bx-user'></i></Link>
        <Link to="/purchases"><i className='bx bx-box'></i></Link>
        <Link to="/cart"><i className='bx bx-cart'></i> {products.length} </Link>
      </div>
    </nav>
  )
}

export default Navbar