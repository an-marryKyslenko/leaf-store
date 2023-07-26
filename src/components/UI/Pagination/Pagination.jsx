import React from 'react'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import './Pagination.css'

const Pagination = ({ data, activePage, setActivePage }) => {
	const handleChangePage = (p) => {
		setActivePage(p)
	}
	const handlePrevPage = () => {
		if (activePage === 1) {
			setActivePage(1)
		} else {

			setActivePage(prevPage => prevPage - 1)
		}

	}
	const handleNextPage = () => {
		if (activePage === data[data.length - 1]) {
			setActivePage(data[data.length - 1])
		} else {
			setActivePage(prevPage => prevPage + 1)
		}
	}
	return (
		<div className='pagination'>
			<button onClick={handlePrevPage} type='button' className='roll-btn'><IoIosArrowBack className='pagination-arrow' /></button>
			{data
				.map((page, index) => (
					<button
						key={index}
						onClick={() => handleChangePage(index + 1)}
						type='button'
						className={`roll-btn ${page === activePage ? 'active' : ''}`}
					>
						{page}
					</button>
				))
			}
			<button onClick={handleNextPage} type='button' className='roll-btn'><IoIosArrowForward className='pagination-arrow' /></button>
		</div>
	)
}

export default Pagination