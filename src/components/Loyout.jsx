import React from 'react'
import { Outlet } from 'react-router-dom'
import { useGlobalContaxt } from '../context'
import Basket from './basket/Basket'
import Footer from './footer/Footer'
import Header from './header/Header'

const Loyout = () => {
	const { openBasket } = useGlobalContaxt()
	return (
		<div className='wrapper'>
			<Header />
			<Outlet />
			{openBasket && <Basket />}
			<Footer />
		</div>
	)
}

export default Loyout;