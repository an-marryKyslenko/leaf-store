import React, { useState } from 'react'
import { useLocation, Link, redirect, useActionData, useNavigation, Form } from 'react-router-dom'
import Input from '../../components/UI/Inputs/Input'

import Title from '../../components/UI/Title/Title'

import { GiCheckMark } from 'react-icons/gi'

import './Auth.css'
import { getUser } from '../../api'

export function loader({ request }) {
	return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
	const formData = await request.formData()
	const email = formData.get('email')
	const password = formData.get('password')
	const pathname = new URL(request.url)
		.searchParams.get('redirectTo') || '/catalogue'
	try {
		const data = await getUser({ email, password })
		localStorage.setItem('loggedin', true)
		return redirect(pathname)
	} catch (error) {
		return error.message
	}
}

const Auth = () => {
	const locatin = useLocation();
	const navigation = useNavigation()
	const status = navigation.state
	const isLogin = locatin.pathname === '/login';

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const title = isLogin 
	? status === 'submitting' ? 'Loging in...' : 'Log in'
	: status === 'submitting' ? 'Registering ...' : 'Registration'
	const errorMessage = useActionData()

	return (
		<main className='main auth'>
			<div className="container">
				<div className="main__paths">
					<Link to='/' className="main__path">Home</Link>
					<p href='#' className="main__path">Authorization</p>
					<p className="main__path">{title}</p>
				</div>
				{/* title component */}
				<Title title={title} clases="auth" secondLeaf />
				{errorMessage && <h2 className='title red'>{errorMessage}</h2>}
				<p className="auth__text">Log in to use all the features of your personal account: order tracking, subscription settings, connections with social networks, and others. We never and under no circumstances disclose personal data of customers. Contact information will be used only for placing orders and making it easier to work with the site</p>
				<Form replace method='post' className="auth__form">
					{isLogin
						?
						<>
							<Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' clases="big" />
							<Input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' clases="big" />
							<div className="auth__question">
								Haven't acount? <Link to='registration' >Let's Registration</Link>
							</div>
						</>
						:
						<>
							<Input name="firstName" type="text" placeholder='First name' />
							<Input name="lastName" type="text" placeholder='Last name' />
							<Input name="phone" type="tel" placeholder='Telephone' />
							<Input name="email" value={email} type="email" placeholder='Email' />
							<Input type="password" placeholder='Password' clases="big" />
							<Input name="password" type="password" placeholder='Confirm password' clases="big" />
							<label className='auth__check-label'>
								<input className='auth__check' type="checkbox" name="" id="" />
								<span className='box'></span>
								<span className='icon'><GiCheckMark /></span>
								<p>I agree to the processing and protection of <span>personal data</span></p>
							</label>

						</>
					}
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

export default Auth