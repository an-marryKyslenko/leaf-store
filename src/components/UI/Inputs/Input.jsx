import React from 'react'
import './Input.css'
const Input = ({ placeholder, type, fuctions, clases }) => {
	return (
		<input
			className={`input ${clases ? clases : ''}`}
			type={type}
			placeholder={placeholder}
			/>
	)
}

export default Input