import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Input from '../../components/UI/Inputs/Input'

import Title from '../../components/UI/Title/Title'

import {GiCheckMark} from 'react-icons/gi'

import './Auth.css'

export function loader({ request }) {
	return new URL(request.url).searchParams.get('message')
}

const Auth = () => {
	const locatin = useLocation()
	const isLogin = locatin.pathname === '/login'

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const title = isLogin ? "Login" : "Registration"
	const path = isLogin ? '/login' : '/registration'
	console.log(isLogin);
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
				<p className="auth__text">Log in to use all the features of your personal account: order tracking, subscription settings, connections with social networks, and others. We never and under no circumstances disclose personal data of customers. Contact information will be used only for placing orders and making it easier to work with the site</p>
				<form className="auth__form">
					{isLogin
						?
						<>
							<Input type="text" placeholder='Email' clases="big"/>
							<Input type="text" placeholder='Password' clases="big"/>
							<div className="auth__question">
								Haven't acount? <Link to='registration'>Let's Registration</Link>
							</div>
						</>
						:
						<>
							<Input type="text" placeholder='First name'  />
							<Input type="text" placeholder='Last name'  />
							<Input type="text" placeholder='Telephone'  />
							<Input type="text" placeholder='Email'  />
							<Input type="text" placeholder='Password' clases="big"/>
							<Input type="text" placeholder='Confirm password' clases="big"/>
							<label className='auth__check-label'>
								<input className='auth__check' type="checkbox" name="" id="" />
								<span className='box'></span>
								<span className='icon'><GiCheckMark/></span>
								<p>I agree to the processing and protection of <span>personal data</span></p>
							</label>

						</>
					}
					<button type="submit" className='auth__btn orange-btn'>{title}</button>
				</form>
			</div>
		</main>
	)
}

export default Auth