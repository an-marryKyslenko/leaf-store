import React from 'react'
import { Link, useActionData, useNavigation, Form, redirect } from 'react-router-dom'

import Input from '../../components/UI/Inputs/Input'
import Title from '../../components/UI/Title/Title'

import './Auth.css'
import { getUser } from '../../api'

export async function action({ request }) {
	const formData = await request.formData()
	const email = formData.get('email')
	const password = formData.get('password')
	try {
		const user = await getUser('/login', { email, password })
		localStorage.setItem('loggedin', true)
		return redirect('/catalogue')
	} catch (error) {
		return error.message
	}
}
const Login = () => {
	const navigation = useNavigation()
	const status = navigation.state
	const title = status === 'submitting' ? 'Loging in...' : 'Log in'

	const errorMessage = useActionData()

	return (
		<main className='main auth'>
			<div className="container">
				<div className="main__paths">
					<Link to='/' className="main__path">Home</Link>
					<p href='#' className="main__path">Authorization</p>
					<p className="main__path">Log in</p>
				</div>

				{/* title component */}
				<Title title={title} clases="auth" secondLeaf />
				{errorMessage && <h2 className='title red'>{errorMessage}</h2>}

				<p className="auth__text">Log in to use all the features of your personal account: order tracking, subscription settings, connections with social networks, and others. We never and under no circumstances disclose personal data of customers. Contact information will be used only for placing orders and making it easier to work with the site</p>
				<Form replace method='post' className="auth__form">
					<Input name="email" type="email" placeholder='Email' clases="big" />
					<Input name="password" type="password" placeholder='Password' clases="big" />
					<div className="auth__question">
						Haven't acount? <Link to='registration' >Let's Registration</Link>
					</div>
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

export default Login