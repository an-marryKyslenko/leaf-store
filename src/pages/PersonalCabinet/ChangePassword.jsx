import React from 'react'
import { Form } from 'react-router-dom'

import './styles/ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className='cabinet__information ch-password'>
      <Form className="ch-password__form">
        <label htmlFor='old-password' className='ch-password__field'>
          <span>Old password</span>
          <input type="text" id='old-password' name='old-password'/>
        </label>
        <label htmlFor='new-password' className='ch-password__field'>
          <span>New password</span>
          <input type="text" id='new-password' name='new-password'/>
        </label>
        <label htmlFor='new-second-password' className='ch-password__field'>
          <span>Controled password</span>
          <input type="text" id='new-second-password' name='password'/>
        </label>
        <button type="submit" className='ch-password__button'>Change password</button>
      </Form>
    </div>
  )
}

export default ChangePassword