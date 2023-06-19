import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/UI/Title/Title'
import {BsArrowLeft} from 'react-icons/bs'
const NotFound = () => {
	return (
		<main className='main'>
			<div className="container">
				<Title title="Sorry, the page  were looking for was not found" />
				<Link className='link-back-home orange-btn' to="/"><span><BsArrowLeft/></span>Return to home</Link>
			</div>
		</main>
	)
}

export default NotFound