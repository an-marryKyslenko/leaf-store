import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'

import './Select.css'
const Select = ({ clases, data }) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false)
	let title = data ? data[0][0] : 'Select by:'
	const [category, setCategory] = useState(title)
	const handleSelect = (e) => {
		let title = e.target.innerText
		setCategory(title)
		if (isOpenSelect) {
			setIsOpenSelect(false)
		}
	}
	return (
		<div className={`${clases}__select select ${data && 'filtered'}`}>
			<div className={`select__drobdown ${isOpenSelect && 'active'}`}>
				<div className={`select__title `} onClick={() => setIsOpenSelect(!isOpenSelect)}>
					<span>{category}</span>
					<span className='select-icon'><IoIosArrowDown /></span>
				</div>
				{data
					?
					<div className="select__list">
						{data.map((item, index) => (
							<div onClick={(e)=>handleSelect(e)} key={index} className="select__option filter__item">
								<span className="filter__name">{item[0]}</span>
								<span className='filter__total'>({item[1]})</span>
							</div>
						))}
					</div>
					:
					<div className="select__list">
						<span onClick={(e)=>handleSelect(e)} className="select__option">Select by price <span>(up)</span></span>
						<span onClick={(e)=>handleSelect(e)} className="select__option">Select by price <span>(down)</span></span>
						<span onClick={(e)=>handleSelect(e)} className="select__option">Select by name <span>(A-Z)</span></span>
						<span onClick={(e)=>handleSelect(e)} className="select__option">Select by name <span>(Z-A)</span></span>
					</div>
				}
			</div>
		</div>
	)
}

export default Select