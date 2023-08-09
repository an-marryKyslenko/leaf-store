import React from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import { Form, redirect } from 'react-router-dom'
import { updateUser } from '../../api'
import './styles/PersonalData.css'

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const phone = formData.get('phone')
  const name = firstName + ' ' + lastName
  const adress = formData.get('adress')
  const userData = JSON.parse(localStorage.getItem("userData"))
  try {
    await updateUser(userData.id, { name, phone, email, adress })
    return redirect('/personal-cabinet')
  } catch (error) {
    return error.message
  }
}
const PersonalData = () => {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const userName = userData.name?.split(' ')
  const lastName = userName.splice(1).join(' ')
  return (
    <div className='cabinet__information per-data'>
      <Form replace method='patch' className="per-data__form">
        <label className='per-data__field' htmlFor='firstName'>
          <span>First name</span>
          <input defaultValue={userName[0]} type="text" name="firstName" id='firstName' placeholder='' />
          <span className='per-data__icon'><BsFillPencilFill /></span>
        </label>
        <label className='per-data__field' htmlFor='lastName'>
          <span>Last name</span>
          <input defaultValue={lastName} type="text" name="lastName" id='lastName' placeholder='' />
          <span className='per-data__icon'><BsFillPencilFill /></span>
        </label>
        <label className='per-data__field' htmlFor='phone'>
          <span>Phone</span>
          <input defaultValue={userData.phone} type="text" name='phone' id='phone' placeholder='' />
          <span className='per-data__icon'><BsFillPencilFill /></span>
        </label>
        <label className='per-data__field' htmlFor='email'>
          <span>Email</span>
          <input defaultValue={userData.userEmail} type="text" name='email' id='email' placeholder='' />
          <span className='per-data__icon'><BsFillPencilFill /></span>
        </label>
        <label className='per-data__field big' htmlFor='adress'>
          <span>Adress delivery</span>
          <input defaultValue={userData.adress} type="text" name='adress' id='adress' placeholder='' />
          <span className='per-data__icon'><BsFillPencilFill /></span>
        </label>
        <button type='submit' className='per-data__button'>Save</button>
      </Form>
    </div>
  )
}

export default PersonalData