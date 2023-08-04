import React from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import { Form } from 'react-router-dom'
import './styles/PersonalData.css'
const PersonalData = () => {
  return (
    <div className='cabinet__information per-data'>
      <Form action="" className="per-data__form">
        <label className='per-data__field' htmlFor='firstName'>
          <span>First name</span>
          <input type="text" name="firstName" id='firstName' placeholder=''/>
          <span className='per-data__icon'><BsFillPencilFill/></span>
        </label>
        <label className='per-data__field' htmlFor='lastName'>
          <span>Last name</span>
          <input type="text" name="lastName" id='lastName' placeholder=''/>
          <span className='per-data__icon'><BsFillPencilFill/></span>
        </label>
        <label className='per-data__field' htmlFor='phone'>
          <span>Phone</span>
          <input type="text" name='phone' id='phone' placeholder=''/>
          <span className='per-data__icon'><BsFillPencilFill/></span>
        </label>
        <label className='per-data__field' htmlFor='email'>
          <span>Email</span>
          <input type="text" name='email' id='email' placeholder=''/>
          <span className='per-data__icon'><BsFillPencilFill/></span>
        </label>
        <label className='per-data__field big' htmlFor='adress'>
          <span>Adress delivery</span>
          <input type="text" name='adress' id='adress' placeholder=''/>
          <span className='per-data__icon'><BsFillPencilFill/></span>
        </label>
        <button type='submite' className='per-data__button'>Save</button>
      </Form>
    </div>
  )
}

export default PersonalData