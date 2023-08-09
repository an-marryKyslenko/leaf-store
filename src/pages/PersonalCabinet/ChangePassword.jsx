import React from 'react'
import { Form, redirect } from 'react-router-dom'

import { updateUser } from '../../api'
import './styles/ChangePassword.css'

export async function action({ request }) {
  const formData = await request.formData()
  const oldPassword = formData.get('old-password')
  const newPassword = formData.get('new-password')
  const password = formData.get('password')

  const userData = JSON.parse(localStorage.getItem("userData"))
  try {
    const userUpdata = await updateUser(userData.id, { password })
    return redirect('/personal-cabinet')
  } catch (error) {
    return error.message
  }
}

const ChangePassword = () => {
  return (
    <div className='cabinet__information ch-password'>
      <Form replace method='patch' className="ch-password__form">
        <label htmlFor='old-password' className='ch-password__field'>
          <span>Old password</span>
          <input type="text" id='old-password' name='old-password' />
        </label>
        <label htmlFor='new-password' className='ch-password__field'>
          <span>New password</span>
          <input type="text" id='new-password' name='new-password' />
        </label>
        <label htmlFor='new-second-password' className='ch-password__field'>
          <span>Controled password</span>
          <input type="text" id='new-second-password' name='password' />
        </label>
        <button type="submit" className='ch-password__button'>Change password</button>
      </Form>
    </div>
  )
}

export default ChangePassword