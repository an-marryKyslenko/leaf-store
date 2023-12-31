import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContaxt } from '../../context'

import { RiShoppingCart2Line } from 'react-icons/ri'
import { LuClipboardList } from 'react-icons/lu'
import { IoMdClose } from 'react-icons/io'

import Title from '../UI/Title/Title'
import './Bastet.css'

const Basket = () => {
	const {products} = useGlobalContaxt()
	const { setOpenBasket, setOrderList } = useGlobalContaxt()
	const productId = localStorage.getItem('id')
	const productItem = products.filter(item => item.id === productId)[0]
		const { name, id, image, company, price, total } = productItem
	
	const [quantity, setQuantity] = useState(1)

	const increaseQuantity = () => {
		if (quantity >= total) {
			setQuantity(total)
		} else { 
			setQuantity(quantity + 1)
		}
	}
	const decreaseQuantity = () => {
		if (quantity <= 0) {
			setQuantity(0)
		} else {
			setQuantity(quantity - 1)
		}
	}
	const handleOrder = (id) => {
		setOrderList(prev => ([...prev, { id: id, totalPrice: quantity * price, quantity }]))
		setOpenBasket(false)
		setQuantity(1)
	}

	return (
		<div className={'basket'}>
			<button onClick={() => setOpenBasket(false)} className="basket__close"><IoMdClose /></button>
			<div className="basket__container">
				<Title clases="basket" title="Basket" secondLeaf />
				{productItem
				?
				<div className="basket__content">
					<h4 className="basket__product-name">{name}</h4>
					<div className="basket__img">
						<img src={image} alt={name} />
					</div>
					<p className="basket__price">${price}</p>
					<p className="basket__production"><span>Manufacturer:</span>{company}</p>
					<div className="basket__quantity quantity">
						<span className='quantity__title'>Quantity</span>
						<button onClick={decreaseQuantity} className='quantity__btn'>-</button>
						<span className='quantity__number'>{quantity}</span>
						<button onClick={increaseQuantity} className='quantity__btn'>+</button>
					</div>
				</div>
				: <p>No product</p>
				}

				<div className="basket__footer">
					<button onClick={() => handleOrder(id)} className='basket__btn'><RiShoppingCart2Line /> Back to shopping</button>
					<Link to="order" onClick={() => handleOrder(id)} className="basket__btn orange"><LuClipboardList /> Order</Link>
				</div>
			</div>
		</div>
	)
}

export default Basket