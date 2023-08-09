import React from 'react'
import { Form, redirect } from 'react-router-dom'

import { deleteUser } from '../../api'
import './styles/DeleteUser.css'

export async function action({ request }) {
  const formData = await request.formData()
  const userDelete = formData.get('delete-user')
  if (userDelete === 'Delete account') {
    const userData = JSON.parse(localStorage.getItem("userData"))
    try {
      const deleteU = await deleteUser(userData.id)
      return redirect('/catalogue')
    } catch (error) {
      return error.message
    }
  } else {
    console.log('not match');
  }
}

const DeleteUser = () => {

  return (
    <div className='cabinet__information cur-orders'>
      <div className="cur-order__content">
        <Form method='delete' replace className="ch-password__form">
          <label htmlFor='delete-user' className='ch-password__field'>
            <span>If you wont delete account, you have to write <span style={{ color: 'red' }}>Delete account</span> in the field bellow</span>
            <input type="text" id='delete-user' name='delete-user' />
          </label>
          <button type='submit' className='ch-password__button'>Delete</button>
        </Form>
      </div>
    </div>
  )
}

export default DeleteUser