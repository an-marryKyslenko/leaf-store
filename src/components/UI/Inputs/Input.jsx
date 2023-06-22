import React from 'react'
import './Input.css'
const Input = ({ ...props}) => {
	return (
		<input
			className={`input ${props.clases ? props.clases : ''}`}
			{...props}
			/>
	)
}

export default Input