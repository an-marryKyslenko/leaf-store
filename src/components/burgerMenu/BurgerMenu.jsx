import React from 'react'
import { Link,NavLink } from 'react-router-dom'

import Search from '../UI/Search/Search'
import Phones from '../UI/Phones/Phones'

import { FaLeaf } from 'react-icons/fa'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { useGlobalContaxt } from '../../context'

import './BurgerMemu.css'

const BurgerMenu = () => {
	const { openBurger } = useGlobalContaxt()
	return (
		<div className={`burger-menu ${openBurger && 'open'}`}>
			<Link className=' logo'>
				<span className='logo__top'>L<span className='logo__icon'><FaLeaf /></span>AF</span>
				<span className='logo__text'>Let's grow together</span>
			</Link>
			<div className="header__buttons">
				<a className='header__button roll-btn'><RiShoppingCart2Line /><span className='total'>1</span></a>
				<p className='header__total-price'>$ <span>0,0</span></p>
			</div>
			<Search />
			<Phones />
			<br />
			<div className="burger-menu__menu">
				<nav className='burger-menu__list'>
					<NavLink to='.' className={({ isActive }) => isActive ? 'burger-menu__link active' : 'burger-menu__link'}>Home</NavLink>
					<NavLink to='catalogue' className={({ isActive }) => isActive ? 'burger-menu__link active' : 'burger-menu__link'}>Catalogue</NavLink>
					<NavLink to='about' className={({ isActive }) => isActive ? 'burger-menu__link active' : 'burger-menu__link'}>About</NavLink>
					<NavLink to='contacts' className={({ isActive }) => isActive ? 'burger-menu__link active' : 'burger-menu__link'}>Contacts</NavLink>
				</nav>
			</div>
		</div>
	)
}

export default BurgerMenu