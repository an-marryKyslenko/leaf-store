import React from 'react'
import { useRouteError } from 'react-router-dom'
import Title from '../UI/Title/Title'

const Error = () => {
	const {message,statusText,status} = useRouteError()

	return (
		<main className='main error'>
			<div className="container">
				<Title title={message}/>
				<p>{statusText} - {status}</p>
			</div>
		</main>
	)
}

export default Error