import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import './Title.css'

const Title = ({ title, clases, secondLeaf }) => {
	return (
		<h2 className={`${clases}__title title`}>
			<FaLeaf className='leaf' />
			{title}
			{secondLeaf && <FaLeaf className='leaf second'/>}
		</h2>
	)
}

export default Title