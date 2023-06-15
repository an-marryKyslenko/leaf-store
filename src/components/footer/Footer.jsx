import React from 'react'
import { Link } from 'react-router-dom'

import { FaLeaf } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import Phones from '../../components/UI/Phones/Phones'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__content">
          <div className="footer__column">
            <Link className='logo'>
              <span className='logo__top'>L<span className='logo__icon'><FaLeaf /></span>AF</span>
              <span className='logo__text'>Let's grow together</span>
            </Link>
            <div className="footer__text">We offer customers a wide selection of vegetable seeds</div>
          </div>
          <div className="footer__column">
            <h4 className="footer__subtitle">Information</h4>
            <ul className='footer__submenu'>
              <li className='footer__link'><Link>About company</Link></li>
              <li className='footer__link'><Link>Payment and delivery</Link></li>
              <li className='footer__link'><Link>Partners</Link></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__subtitle">Product</h4>
            <ul className='footer__submenu'>
              <li className='footer__link'><Link>Catalog of products</Link></li>
              <li className='footer__link'><Link>Plants protecting tools</Link></li>
              <li className='footer__link'><Link>Seed</Link></li>
              <li className='footer__link'><Link>Fertilizers</Link></li>
              <li className='footer__link'><Link>Help the agronomist</Link></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__subtitle">Contacts</h4>
            <Phones />
            <div className="footer__mail">
              <a href="#" className="roll-btn"><CiMail /></a>
              <a href=''>leaf@mail.ua</a>
            </div>
          </div>
        </div>
        <div className="footer__copy">© 2022 DAT</div>
      </div>
    </footer>
  )
}

export default Footer