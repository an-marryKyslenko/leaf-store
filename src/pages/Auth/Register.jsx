import React from 'react'
import { Link, useActionData, useNavigation, redirect, Form } from 'react-router-dom'

import Input from '../../components/UI/Inputs/Input'
import Title from '../../components/UI/Title/Title'

import { GiCheckMark } from 'react-icons/gi'

import './Auth.css'
import { getUser } from '../../api'

export async function action({ request }) {
	const formData = await request.formData()
	const email = formData.get('email')
	const firstName = formData.get('firstName')
	const lastName = formData.get('lastName')
	const phone = formData.get('phone')
	const dublPassword = formData.get('dublPassword')
	const password = formData.get('password')
	const isChecked = formData.get('isChecked')
	const name = firstName + ' ' + lastName
	try {
		const user = await getUser('/register', { name, phone, email, password })
		localStorage.setItem('loggedin', true)
		return redirect('/catalogue')
	} catch (error) {
		return error.message
	}
}

const Register = () => {
	const navigation = useNavigation()
	const status = navigation.state
	const title = status === 'submitting' ? 'Registering ...' : 'Registration'
	const errorMessage = useActionData()
	return (
		<main className='main auth'>
			<div className="container">
				<div className="main__paths">
					<Link to='/' className="main__path">Home</Link>
					<p href='#' className="main__path">Authorization</p>
					<p className="main__path">Registration</p>
				</div>
				{/* title component */}
				<Title title={title} clases="auth" secondLeaf />
				{errorMessage && <h2 className='title red'>{errorMessage}</h2>}
				<p className="auth__text">Log in to use all the features of your personal account: order tracking, subscription settings, connections with social networks, and others. We never and under no circumstances disclose personal data of customers. Contact information will be used only for placing orders and making it easier to work with the site</p>
				<Form replace method='post' className="auth__form">
					<Input name="firstName" type="text" placeholder='First name' />
					<Input name="lastName" type="text" placeholder='Last name' />
					<Input name="phone" type="tel" placeholder='Telephone' />
					<Input name="email" type="email" placeholder='Email' />
					<Input name="dublPassword" type="password" placeholder='Password' clases="big" />
					<Input name="password" type="password" placeholder='Confirm password' clases="big" />
					<label className='auth__check-label'>
						<input name="isChecked" className='auth__check' type="checkbox" />
						<span className='box'></span>
						<span className='icon'><GiCheckMark /></span>
						<p>I agree to the processing and protection of <span>personal data</span></p>
					</label>
					<button
						disabled={status === 'submitting'}
						type="submit"
						className='auth__btn orange-btn'
					>
						{title}
					</button>
				</Form>
			</div>
		</main>
	)
}

export default Register