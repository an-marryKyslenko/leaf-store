import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FaLeaf } from 'react-icons/fa'

import { RiShoppingCart2Line } from 'react-icons/ri'

import './Header.css'

import HeaderTop from './HeaderTop/HeaderTop'
import HeaderCategory from './HeaderCategory/HeaderCategory'
import Search from '../UI/Search/Search'
import Phones from '../UI/Phones/Phones'
import BurgerMenu from '../burgerMenu/BurgerMenu'

const Header = () => {
  const [isHome, setIsHome] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      return setIsHome(true)
    }
    return setIsHome(false)
  }, [pathname])
  return (
    <header id='header' className={isHome ? 'header absolute' : 'header'}>
      <HeaderTop />
      <div className='container'>
        <div className="header__middle">
          <Link className='header__logo logo'>
            <span className='logo__top'>L<span className='logo__icon'><FaLeaf /></span>AF</span>
            <span className='logo__text'>Let's grow together</span>
          </Link>
          <Search />
          <Phones />
          <div className="header__buttons">
            <Link to='order' className='header__button roll-btn'><RiShoppingCart2Line /><span className='total'>1</span></Link>
            <p className='header__total-price'>$ <span>0,0</span></p>
          </div>
        </div>
        <HeaderCategory />
      </div>
      <BurgerMenu />

    </header>
  )
}

export default Header