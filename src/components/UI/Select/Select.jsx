import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'

import './Select.css'
const Select = ({clases}) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false)

	const handleSelect = (e) => {
		if (isOpenSelect) {
			setIsOpenSelect(false)
		}
	}
	return (
		<div className={`${clases}__select select`}>
			<div className={`select__drobdown ${isOpenSelect && 'active'}`}>
				<span className="select__title" onClick={() => setIsOpenSelect(!isOpenSelect)}>Select by name: <span><IoIosArrowDown /></span></span>
				<div className="select__list">
					<span className="select__option">Select by price (up)</span>
					<span className="select__option">Select by price (down)</span>
					<span className="select__option">Select by name (A-Z)</span>
					<span className="select__option">Select by name (Z-A)</span>
				</div>
			</div>
		</div>
	)
}

export default Select