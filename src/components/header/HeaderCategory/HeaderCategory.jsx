import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './HeaderCategory.css'
import { FILTER } from '../../../const'
import { useGlobalContaxt } from '../../../context'
import { useCallback } from 'react'

const HeaderCategory = () => {
	const { mainCategory, setMainCategory } = useGlobalContaxt()
	const windowWidth = window.innerWidth
	const [isOpen, setIsOpen] = useState(false)

	const handeleCategory = useCallback((e) => {
		setIsOpen(false)
		setMainCategory(e.target.value)
	}, [mainCategory])
	return (
		<div className="header__category category">
			{windowWidth < 820
				?
				<div className={`category__drobdown drobdown ${isOpen && 'active'}`}>
					<span
						className='drobdown__title'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? "Choose category" : mainCategory}
						<span><IoIosArrowDown /></span>
					</span>
					<div className="drobdown__list">
						{FILTER.map(({ category, icon }) => {
							return (
								<label
									key={category}
									className='drobdown__link'
								>
									<input
										onClick={(e) => handeleCategory(e)}
										type="radio"
										value={category}
										className="category__input"
									/>
									<img src={icon} alt="icon" />
									<span>{category}</span>
								</label>
							)
						})}
					</div>
				</div>
				:
				<>
					{FILTER.map(({ category, icon }) => (
						<label
							key={category}
							className='category__btn'
						>
							<input
								onClick={(e) => handeleCategory(e)}
								type="radio"
								value={category}
								className="category__input"
							/>
							<img src={icon} alt="icon" />
							<span>{category}</span>
						</label>
					))}

				</>
			}
		</div>

	)
}

export default HeaderCategory