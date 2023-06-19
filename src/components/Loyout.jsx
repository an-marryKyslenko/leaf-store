import React from 'react'
import { Outlet } from 'react-router-dom'
import Basket from '../basket/Basket'
import Footer from './footer/Footer'
import Header from './header/Header'

const Loyout = () => {
  return (
	 <div className='wrapper'>
		<Header/>
		<Outlet/>
		<Basket />
		<Footer/>
	 </div>
  )
}

export default Loyout;