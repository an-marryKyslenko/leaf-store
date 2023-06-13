import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const Loyout = () => {
  return (
	 <div className='wrapper'>
		<Header/>
		<Outlet/>
		<Footer/>
	 </div>
  )
}

export default Loyout;