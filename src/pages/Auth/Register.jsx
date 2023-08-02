import React, { useState, useEffect } from 'react'
import { Link, useActionData, useNavigation, Form, useLocation } from 'react-router-dom'

import Input from '../../components/UI/Inputs/Input'
import Title from '../../components/UI/Title/Title'

import { GiCheckMark } from 'react-icons/gi'

import './Auth.css'
import { useGlobalContaxt } from '../../context'
import { getUser } from '../../api'



const Register = () => {
	const [valueRegister, setValueRegister] = useState({
		firstName: '',
		lastName: '',
		dublPassword: '',
		password: '',
		email: '',
		phone: '',
		isChecked: false,
	})
	const { setUserInfo } = useGlobalContaxt()
	const location = useLocation()
	const path = location.pathname

	const navigation = useNavigation()

	const status = navigation.state

	const title = status === 'submitting' ? 'Registering ...' : 'Registration'
	const errorMessage = useActionData()

	const handleChangeRegister = (e) => {
		const name = e.target.name;
		const value = name === 'isChecked' ? e.target.checked : e.target.value;
		setValueRegister(prev => ({ ...prev, [name]: value }))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const { lastName, firstName, email, phone, password, isChecked } = valueRegister;
		const name = firstName + ' ' + lastName
		if (name && email && password && isChecked) {
			
			isLogin({name,email,password,phone})
		}
	}
	const isLogin = async(obj)=>{
		const user = await getUser(path,obj)
		
	}
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
				<Form onSubmit={handleSubmit} replace method='post' className="auth__form">
					<Input name="firstName" value={valueRegister.firstName} onChange={(e) => handleChangeRegister(e)} type="text" placeholder='First name' />
					<Input name="lastName" value={valueRegister.lastName} onChange={(e) => handleChangeRegister(e)} type="text" placeholder='Last name' />
					<Input name="phone" value={valueRegister.phone} onChange={(e) => handleChangeRegister(e)} type="tel" placeholder='Telephone' />
					<Input name="email" value={valueRegister.email} onChange={(e) => handleChangeRegister(e)} type="email" placeholder='Email' />
					<Input name="dublPassword" value={valueRegister.dublPassword} onChange={(e) => handleChangeRegister(e)} type="password" placeholder='Password' clases="big" />
					<Input name="password" value={valueRegister.password} onChange={(e) => handleChangeRegister(e)} type="password" placeholder='Confirm password' clases="big" />
					<label className='auth__check-label'>
						<input name="isChecked" onChange={(e) => handleChangeRegister(e)} className='auth__check' type="checkbox" />
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