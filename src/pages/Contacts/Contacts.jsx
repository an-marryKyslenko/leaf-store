import React from 'react'
import { Link } from 'react-router-dom'

import { GoClock } from 'react-icons/go'
import { BiMap } from 'react-icons/bi'
import { CiMail } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'

import Title from '../../components/UI/Title/Title'
import './Contacts.css'
import Input from '../../components/UI/Inputs/Input'
const Contacts = () => {
  return (
    <main className='main contacts'>
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <a href='#' className="main__path">Contacts</a>
        </div>
        {/* title component */}
        <Title title="Contacts" clases="contacts" secondLeaf />
        <div className="contacts__info">
          <div className="contacts__info-box">
            <div className="contacts__item">
              <span className='contacts__icon'><BiMap /></span>
              <p>Україна, Вінницька область,
                Вінниця, Хмельницьке шосе, 122
              </p>
            </div>
            <div className="contacts__item">
              <span className='contacts__icon'><GoClock /></span>
              <p><span>Md-Fr:</span>
                9.00-18.00
              </p>
            </div>
            <div className="contacts__item">
              <span className='contacts__icon'><CiMail /></span>
              <p>shop@ukrsemena.com</p>
            </div>
          </div>
          <h5 className='contacts__subtitle'>Department of sales and agronomic support</h5>
          <p className="contacts__info-text">
            If you need help with placing an order, advice on the use of products, have questions about your orders, contact here:
          </p>
          <div className="contacts__info-box">
            <div className="contacts__item">
              <span className='contacts__icon'><GoClock /></span>
              <p>
                <span>Md-Fr:</span>
                9.00-18.00
              </p>
            </div>
            <div className="contacts__item">
              <span className='contacts__icon'><BsTelephone /></span>
              <p>
                <span>(050) 42-42-820</span>
                <span>(050) 42-42-824</span>
              </p>
            </div>
            <div class="contacts__item">
              <span className='contacts__icon'><BsTelephone /></span>
              <p>
                <span>(050) 42-42-820</span>
                <span>(050) 42-42-824</span>
              </p>
            </div>
          </div>
        </div>
        {/* title component */}
        <div className="contacts__form-contant">
          <Title title="Write to us" clases="contacts" secondLeaf />
          <p className="contacts__text-form">Введіть ваші контактні дані і текст повідомлення, якщо у вас виникли питання або пропозиції, і ми найближчим часом відповімо вам.</p>
          <form className='contacts__form form'>
            <Input type="text" placeholder='First name'/>
            <Input type="text" placeholder='Last name'/>
            <Input type="text" placeholder='Phone number'/>
            <Input type="text" placeholder='Email'/>
            <textarea name="" id="" cols="30" rows="10" className='form__textarea' placeholder='Your message ...'></textarea>
            <input type="submit" value="Submit" className='form__btn orange-btn'/>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contacts