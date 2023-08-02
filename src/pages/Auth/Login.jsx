import React, { useState } from 'react'
import { Link, useActionData, useNavigation, Form, useLocation } from 'react-router-dom'

import Input from '../../components/UI/Inputs/Input'
import Title from '../../components/UI/Title/Title'

import './Auth.css'
import { useGlobalContaxt } from '../../context'
import { getUser } from '../../api'

const Login = () => {
	const [valueLogin, setValueLogin] = useState({
		email: '',
		password: ''
	})
	const {setUserInfo } = useGlobalContaxt()

	const location = useLocation()
	const path = location.pathname
	const navigation = useNavigation()
	const status = navigation.state
	const title = status === 'submitting' ? 'Loging in...' : 'Log in'

	const errorMessage = useActionData()
	const handleChangeLogin = (e) => {
		const value = e.target.value
		const name = e.target.name
		setValueLogin(prev => ({ ...prev, [name]: value }))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const { email, password } = valueLogin;
		if (email && password) {
			isLogin({email,password})
		}
	}
	const isLogin = async(obj)=>{
		const user = await getUser(path,obj)

//TODO setUserInfo({...user,isUser: true})
	}
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
				<Form onSubmit={handleSubmit} replace method='post' className="auth__form">
					<Input name="email" value={valueLogin.email} onChange={(e) => handleChangeLogin(e)} type="email" placeholder='Email' clases="big" />
					<Input name="password" value={valueLogin.password} onChange={(e) => handleChangeLogin(e)} type="password" placeholder='Password' clases="big" />
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