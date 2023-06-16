import React from 'react'

import './CartProduct.css'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const CartProduct = ({name,price,photo}) => {
	return (
		<Link  className='cart'>
			<div className="cart__container">
				<div className="cart__img">
					<img src={photo} alt="" />
				</div>
				<div className="cart__info">
					<h5 className="cart__title">{name}</h5>
					<span className='cart__in-stock'>In stoke</span>
					<div className="cart__price">$ {price}</div>
					<p className="roll-btn"><RiShoppingCart2Line/></p>
				</div>
			</div>
		</Link>
	)
}

export default CartProduct