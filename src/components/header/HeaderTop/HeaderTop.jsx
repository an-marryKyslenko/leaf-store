import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import {RxEnter} from 'react-icons/rx'
import { BiLogIn } from 'react-icons/bi'
import { BsPersonCircle, BsThreeDotsVertical } from 'react-icons/bs'
import './HeaderTop.css'
import { useGlobalContaxt } from '../../../context'

const HeaderTop = () => {
	const { openBurger, setOpenBurger } = useGlobalContaxt()
	const isAuth = localStorage.getItem('loggedin')
	const removeAuth = ()=>localStorage.clear()
	const userName = JSON.parse(localStorage.getItem("userData")) || ''
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
				{isAuth
					?
					<>
					<h4>{`Hello, ${userName.name}`}</h4>
					<Link to='personal-cabinet' aria-label='personalCabinet' className='header__enter-link'><BsPersonCircle/></Link>
					<Link to='.' onClick={removeAuth} aria-label="exit" className='header__enter-link'><RxEnter/></Link>
					</>
			:
			<>
					<Link to='login' className='header__enter-link' aria-label='Login'><span><BiLogIn /></span>Login</Link>
					<Link to='register' className='header__enter-link' aria-label='Registration'>Registration</Link>
			</>
				}
				</div>
				<div
					className={openBurger ? 'header__burger open' : 'header__burger'}
					onClick={() => setOpenBurger(!openBurger)}
				>
					<BsThreeDotsVertical />
				</div>
			</div>
		</div>
	)
}

export default HeaderTop