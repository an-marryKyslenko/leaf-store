import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { useGlobalContaxt } from '../../../context'

import './Select.css'
const Select = ({ clases, data }) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false)
	const { setFilterTypes } = useGlobalContaxt()
	let title = data ? data[0][0] : 'Select by:'
	const [category, setCategory] = useState(title)

	const handleSelect = (e) => {
		let value = e.target.value
		setCategory(() => value.includes('price') ? 'Select by price' : 'Select by name')
		console.log(value.includes('name'));
		setFilterTypes(prevFilterType => ({ ...prevFilterType, sort: value }))
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
							<div onClick={(e) => handleSelect(e)} key={index} className="select__option filter__item">
								<span className="filter__name">{item[0]}</span>
								<span className='filter__total'>({item[1]})</span>
							</div>
						))}
					</div>
					:
					<div className="select__list">
						<label onClick={(e) => handleSelect(e)} className="select__option">
							<input className='select__input' type="radio" name='catologue-select' value="price" />
							Select by price <span>(up)</span>
						</label>
						<label onClick={(e) => handleSelect(e)} className="select__option">
							<input className='select__input' type="radio" name='catologue-select' value="-price" />
							Select by price <span>(down)</span>
						</label>
						<label onClick={(e) => handleSelect(e)} className="select__option">
							<input className='select__input' type="radio" name='catologue-select' value="name" />
							Select by name <span>(A-Z)</span>
						</label>
						<label onClick={(e) => handleSelect(e)} className="select__option">
							<input className='select__input' type="radio" name='catologue-select' value="-name" />
							Select by name <span>(Z-A)</span>
						</label>
					</div>
				}
			</div>
		</div>
	)
}

export default Select