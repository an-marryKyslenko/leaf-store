import React from 'react'
import { Link } from 'react-router-dom'

import { FaLeaf } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'

import { RiShoppingCart2Line } from 'react-icons/ri'



import './Header.css'
import { useState } from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderCategory from './HeaderCategory/HeaderCategory'
import Search from '../UI/Search/Search'
import Phones from '../UI/Phones/Phones'

const Header = () => {
  return (
    <header className='header'>
      <HeaderTop/>
      <div className='container'>
        <div className="header__middle">
          <Link className='header__logo logo'>
            <span className='logo__top'>L<span className='logo__icon'><FaLeaf /></span>AF</span>
            <span className='logo__text'>Let's grow together</span>
          </Link>
          <Search/>
          <Phones/>
          <div className="header__buttons">
            <a className='header__button red-btn'><RiShoppingCart2Line/><span className='total'>1</span></a>
            <p className='header__total-price'>$ <span>0,0</span></p>
          </div>
        </div>
        <HeaderCategory/>
      </div>
    </header>
  )
}

export default Header