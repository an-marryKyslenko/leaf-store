import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { BiLogIn } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './HeaderTop.css'
import { useState } from 'react'
import { useGlobalContaxt } from '../../../context'

const HeaderTop = () => {
	const { openBurger, setOpenBurger } = useGlobalContaxt()
	return (
		<div className="header__top">
			<div className="header__container container">
				<nav className='header__menu'>
					<NavLink to='.' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>Home</NavLink>
					<NavLink to='catalogue?category=seeds' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>Catalogue</NavLink>
					<NavLink to='about' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>About</NavLink>
					<NavLink to='contacts' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>Contacts</NavLink>
				</nav>
				<div className="header__enter">
					<Link to='registration' className='header__enter-link'><span><BiLogIn /></span>Login</Link>
					<Link to='login' className='header__enter-link'>Registration</Link>
				</div>
				<div
					className={openBurger ?'header__burger open' : 'header__burger' }
					onClick={() => setOpenBurger(!openBurger)}
				>
					<BsThreeDotsVertical />
				</div>
			</div>
		</div>
	)
}

export default HeaderTop