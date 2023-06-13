import React from 'react'

// import icon1 from '../../../../public/images/icons/icon-btn-1.svg'
// import icon2 from '../../../images/icons/icon-btn-2.svg'
// import icon3 from '../../../images/icons/icon-btn-3.svg'
// import icon4 from '../../../images/icons/icon-btn-4.svg'
// import icon5 from '../../../images/icons/icon-btn-5.svg'
// import { icon1 } from '../../../images/images'

import './HeaderCategory.css'

const HeaderCategory = () => {
	return (
		<div className="header__category category">
			<a className='category__btn'><img href='/images/icons/icon-btn-3.svg' alt="icon" />Plants protecting tools</a>
			<a className='category__btn'><img href='../icons/icon-btn-3.svg' alt="icon" />Fertilizers</a>
			<a className='category__btn'><img href='../icons/icon-btn-3.svg' alt="icon" />feed group</a>
			<a className='category__btn'><img href='../icons/icon-btn-3.svg' alt="icon" />Help the agronomist</a>
		</div>
	)
}

export default HeaderCategory