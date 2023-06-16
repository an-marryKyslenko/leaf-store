import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'


import icon1 from '../../../assets/images/icons/icon-btn.png'
import icon2 from '../../../assets/images/icons/icon-btn-2.svg'
import icon3 from '../../../assets/images/icons/icon-btn-3.svg'
import icon4 from '../../../assets/images/icons/icon-btn-4.svg'
import icon5 from '../../../assets/images/icons/icon-btn-5.svg'

import './HeaderCategory.css'
import { useGlobalContaxt } from '../../../context'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
const catalogue = [
	{ id: 11, icon: icon1, name: 'Seeds' },
	{ id: 12, icon: icon2, name: 'Plants protecting tools' },
	{ id: 13, icon: icon3, name: 'Fertilizers' },
	{ id: 14, icon: icon4, name: 'Feed group' },
	{ id: 15, icon: icon5, name: 'Help the agronomist' }
]

const HeaderCategory = () => {
	const { windowWidth, setCategory, category } = useGlobalContaxt()
	const [isOpen, setIsOpen] = useState(false)
	const [searchParams, setSearchParams] = useSearchParams()
	const handleChosenCategory = (e) => {
		let categoryType = e.target.innerText.toLowerCase()
		setCategory(e.target.innerText)
		setSearchParams({ category: categoryType })
		if (isOpen) {
			setIsOpen(false)
		}
	}
	return (
		<div className="header__category category">
			{windowWidth <= 820
				?
				<div className={`category__drobdown drobdown ${isOpen && 'active'}`}>
					<span className='drobdown__title' onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Choose category" : category} <span><IoIosArrowDown /></span></span>
					<div className="drobdown__list">
						{catalogue.map((item) => {
							return (
								<Link
								to={`catalogue?category=${item.name.toLocaleLowerCase()}`}
									key={item.id}
									className='drobdown__link'
									onClick={(e) => handleChosenCategory(e)}
								>
									<img src={item.icon} alt="icon" />
									<span>{item.name}</span>
								</Link>
							)
						})}
					</div>

				</div>
				:
				<>
					{catalogue.map((item, index) => (
						<Link
							to={`catalogue?category=${item.name.toLocaleLowerCase()}`}
							key={item.id}
							className='category__btn'
							onClick={(e) => handleChosenCategory(e)}
						>
							<img src={item.icon} alt="icon" />
							<span>{item.name}</span>
						</Link>
					))}

				</>
			}
		</div>

	)
}

export default HeaderCategory