import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'


import icon1 from '../../../assets/images/icons/icon-btn.png'
import icon2 from '../../../assets/images/icons/icon-btn-2.svg'
import icon3 from '../../../assets/images/icons/icon-btn-3.svg'
import icon4 from '../../../assets/images/icons/icon-btn-4.svg'
import icon5 from '../../../assets/images/icons/icon-btn-5.svg'

import './HeaderCategory.css'
import { useGlobalContaxt } from '../../../context'
const catalogue = [
	{ id: 11, icon: icon1, name: 'Seeds' },
	{ id: 12, icon: icon2, name: 'Plants protecting tools' },
	{ id: 13, icon: icon3, name: 'Fertilizers' },
	{ id: 14, icon: icon4, name: 'Feed group' },
	{ id: 15, icon: icon5, name: 'Help the agronomist' }
]

const HeaderCategory = () => {
	const { windowWidth,setCategory, category } = useGlobalContaxt()
	const [isOpen,setIsOpen] =useState(false)

	const handleChosenCategory = (e)=>{
		setCategory(e.target.innerText)
		if(isOpen){
			setIsOpen(false)
		}
	}
	console.log(windowWidth);
	return (
		<div className="header__category category">
			{windowWidth <= 820
				?
				<div className={`catagory__drobdown drobdown ${isOpen && 'active'}`}>
					<span className='drobdown__title' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "Choose category":category} <span><IoIosArrowDown/></span></span>
					<div className="drobdown__list">
						{catalogue.map((item) => {
							return (
								<a key={item.id} className='drobdown__link' onClick={(e)=>handleChosenCategory(e)}><img src={item.icon} alt="icon" />{item.name}</a>
							)
						})}
					</div>

				</div>
				:
				<>
					{catalogue.map((item, index) => (
						<a key={item.id} className='category__btn' onClick={(e)=>handleChosenCategory(e)}><img src={item.icon} alt="icon" />{item.name}</a>
					))}

				</>
			}
		</div>

	)
}

export default HeaderCategory