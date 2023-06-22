import React from 'react'
import { useGlobalContaxt } from '../../../context'

import './OrderProduct.css'

const OrderProduct = ({ name, id, price, photo }) => {
	const { windowWidth, setOrderList, orderList } = useGlobalContaxt()
	const { quantity } = orderList.find(item => item.id === id)

	const deleteItem = (id) => {
		setOrderList(prev => prev.filter(item => item.id !== id))
	}
	return (
		<div className="basket-order__item order-item">
			{windowWidth <= 520 && <h6 className="order-item__name">{name}</h6>}
			<div className="order-item__img">
				<img src={photo} alt={name} />
			</div>
			<div className="order-item__info">
				<h6 className="order-item__name">{name}</h6>
				<span className='order-item__price'>${price}</span>
				<span>x{quantity}</span>
			</div>
			<button onClick={() => deleteItem(id)} className="order-item__delete">X</button>
		</div>
	)
}

export default OrderProduct