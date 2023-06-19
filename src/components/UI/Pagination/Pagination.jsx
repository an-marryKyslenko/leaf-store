import React from 'react'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import './Pagination.css'

const Pagination = ({ data, total }) => {
	return (
		<div className='pagination'>
			<button type='button' className='roll-btn'><IoIosArrowBack className='pagination-arrow' /></button>
			{data
				.filter((item, index) => index % total === 0)
				.map((item, index) => (
					<button key={index} type='button' className={`roll-btn ${index === 0 ? 'active' : ''}`}>{index + 1}</button>
				))
			}
			<button type='button' className='roll-btn'><IoIosArrowForward className='pagination-arrow' /></button>
		</div>
	)
}

export default Pagination