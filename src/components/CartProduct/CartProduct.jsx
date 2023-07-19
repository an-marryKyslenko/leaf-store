import React from 'react'

import './CartProduct.css'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'


const CartProduct = ({name,price,image,id,path}) => {
	const {setOpenBasket} = useGlobalContaxt()

	const handleAddToBasket = (e,id)=>{
		e.preventDefault()
		setOpenBasket(true)
		localStorage.setItem('id',id)
	}

	return (
		<Link to={path ? path+ '/' + id :id} className='cart'>
			<div className="cart__container">
				<div className="cart__img">
					<img src={image} alt="" />
				</div>
				<div className="cart__info">
					<h5 className="cart__title">{name}</h5>
					<span className='cart__in-stock'>In stoke</span>
					<div className="cart__price">$ {price}</div>
					<span onClick={(e)=>handleAddToBasket(e,id)} className="roll-btn"><RiShoppingCart2Line/></span>
				</div>
			</div>
		</Link>
	)
}

export default CartProduct