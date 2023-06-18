import React from 'react'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import './Pagination.css'

const Pagination = ({ data, total }) => {
	return (
		<div className='pagination'>
			<span className='roll-btn'><IoIosArrowBack className='pagination-arrow'/></span>
			{data.filter((item, index) => index % total === 0).map((item, index) => (
				<span className={`roll-btn ${index === 0 ?'active': ''}`}>{index+1}</span>
			))}
			<span className='roll-btn'><IoIosArrowForward className='pagination-arrow'/></span>
		</div>
	)
}

export default Pagination