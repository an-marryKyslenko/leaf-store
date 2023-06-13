import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { BsTelephone } from 'react-icons/bs'

import './Phones.css'

const Phones = () => {
	const [visiblePhone, setVisiblePhone] = useState(false)

	return (
		<div className="header__phones phones">
			<div className={`phones__drob-down ${visiblePhone && 'active'}`}>
				<a href="tel:+380969980940" className="phones__call red-btn"><BsTelephone /></a>
				<div className="phones__list">
					<a href="tel:+380969980940">+3 (096) 99 80 940</a>
					<Link to="contacts" className="phones__link-back">Order feedback</Link>
					{visiblePhone && <div className="phones__hover-list" onMouseLeave={() => setVisiblePhone(false)}>
						<a href={`tel:+380969980940`}>+3 (096) 99 80 940</a>
					</div>}
				</div>
				<IoIosArrowDown className='phones__icon' onClick={() => setVisiblePhone(true)} />
			</div>
		</div>
	)
}

export default Phones