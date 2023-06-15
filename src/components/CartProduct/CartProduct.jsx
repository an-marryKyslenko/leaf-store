import React from 'react'

import './CartProduct.css'
import { RiShoppingCart2Line } from 'react-icons/ri'

import photo from '../../assets/images/item-photo.png'

const CartProduct = () => {
	return (
		<div className='cart'>
			<div className="cart__container">
				<div className="cart__img">
					<img src={photo} alt="" />
				</div>
				<div className="cart__info">
					<h5 className="cart__title">Скор 250 ЕС к.э.</h5>
					<span className='cart__in-stock'>In stoke</span>
					<div className="cart__price">$32</div>
					<a href="#" className="roll-btn"><RiShoppingCart2Line/></a>
				</div>
			</div>
		</div>
	)
}

export default CartProduct