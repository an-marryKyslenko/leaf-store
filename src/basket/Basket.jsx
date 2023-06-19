import React from 'react'
import Title from '../components/UI/Title/Title'
import './Bastet.css'
const Basket = () => {
	return (
		<div className='basket'>
			<div className="basket__container">
				<Title clases="basket" title="Basket" secondLeaf/>
				<div className="basket__content">
					
				</div>
			</div>
		</div>
	)
}

export default Basket