import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { BiLogIn } from 'react-icons/bi'

import './HeaderTop.css'

const HeaderTop = () => {
	return (
		<div className="header__top">
			<div className="header__container container">
				<nav className='header__menu'>
					<NavLink to='.' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>Home</NavLink>
					<NavLink to='catalogue' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>Catalogue</NavLink>
					<NavLink to='about' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>About</NavLink>
					<NavLink to='contacts' className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>Contacts</NavLink>
				</nav>
				<div className="header__enter">
					<Link to='registration' className='header__enter-link'><span><BiLogIn /></span>Login</Link>
					<Link to='login' className='header__enter-link'>Registration</Link>
				</div>
			</div>
		</div>
	)
}

export default HeaderTop