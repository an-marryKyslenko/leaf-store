import React from 'react'
import { Link } from 'react-router-dom'

import { FaLeaf } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import { BsArrowUp } from 'react-icons/bs'

import Phones from '../../components/UI/Phones/Phones'

import './Footer.css'

const Footer = () => {
  
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__content">
          <div className="footer__column">
            <Link to="/" className='logo'>
              <span className='logo__top'>L<span className='logo__icon'><FaLeaf /></span>AF</span>
              <span className='logo__text'>Let's grow together</span>
            </Link>
            <div className="footer__text">We offer customers a wide selection of vegetable seeds</div>
          </div>
          <div className="footer__column">
            <h4 className="footer__subtitle">Information</h4>
            <ul className='footer__submenu'>
              <li className='footer__link'><Link to="about">About company</Link></li>
              <li className='footer__link'><Link to="">Payment and delivery</Link></li>
              <li className='footer__link'><Link to="">Partners</Link></li>
            </ul>
          </div>
          <div className="footer__column">
            <h5 className="footer__subtitle">Product</h5>
            <ul className='footer__submenu'>
              <li className='footer__link'><Link to="catalogue?category=seeds">Catalog of products</Link></li>
              <li className='footer__link'><Link to="catalogue?category=plants%20protecting%20tools">Plants protecting tools</Link></li>
              <li className='footer__link'><Link to="catalogue?category=seeds">Seed</Link></li>
              <li className='footer__link'><Link to="catalogue?category=fertilizers">Fertilizers</Link></li>
              <li className='footer__link'><Link to="catalogue?category=help%20the%20agronomist">Help the agronomist</Link></li>
            </ul>
          </div>
          <div className="footer__column">
            <h5 className="footer__subtitle">Contacts</h5>
            <Phones />
            <div className="footer__mail">
              <a href="#" className="roll-btn"><CiMail /></a>
              <a href=''>leaf@mail.ua</a>
            </div>
          </div>
        </div>
        <div className="footer__copy">© 2022 DAT</div>
        <a href="#header" className='footer__link-to-top' aria-label='linkToTop'><BsArrowUp/></a>
      </div>
    </footer>
  )
}

export default Footer