import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'

import { RiShoppingCart2Line } from 'react-icons/ri'
import { BsCheck2, BsTelephone } from 'react-icons/bs'
import { RiVisaFill } from 'react-icons/ri'
import { FaCcPaypal } from 'react-icons/fa'

import './SingleProduct.css'

import Title from '../../components/UI/Title/Title'
import Input from '../../components/UI/Inputs/Input'
import Loading from '../../components/UI/Loading/Loading'


const SingleProduct = () => {
	const { setOpenBasket, products, isLoading } = useGlobalContaxt()
	const [activeComments, setActiveComments] = useState(false)
	const [activeDiscribe, setActiveDiscribe] = useState(true)

	const { id } = useParams()
	const product = products.find(el => el.id === id)
	const { name, price, image, total, type, production, category } = product

	const handleChangeActiveButton = (e) => {
		const buttonName = e.target.innerText.toLowerCase()
		if (buttonName === 'comments') {
			setActiveComments(true)
			setActiveDiscribe(false)
		} else {
			setActiveComments(false)
			setActiveDiscribe(true)
		}
	}
	const handleAddToBasket = (id) => {
		setOpenBasket(true)
		localStorage.setItem('id', id)
	}
	return (
		<main className='main single-product'>
			<div className="container">
				{isLoading
					?
					<Loading />
					:
					<>
						<div className="single-product__main-info">
							<div className="single-product__photo">
								<img src={image} alt={name} />
							</div>
							<div className="single-product__main-content">
								<Title title={name} clases="single-product" />
								<div className='single-product__in-stock'>
									<p><span><BsCheck2 /></span>In stoke</p>
									<p>Total: {total}</p>
								</div>
								<div className="single-product__info">
									<div className="single-product__info-box">
										<h6>Manufacturer</h6>
										<p>{production}</p>
										<br />
										<h6>Payment</h6>
										<p className='single-product__payment'>
											<span><RiVisaFill /></span>
											<span><FaCcPaypal /></span>
										</p>
									</div>
									<div className="single-product__info-box">
										<h6>Delivery</h6>
										<p>Tomorrow according to the carrier's tariffs</p>
										<a href='tel:+380671150058' className='single-product__call-back'><span><BsTelephone /></span>Order a call</a>
									</div>
								</div>
								<div className="single-product__footer">
									<p className='single-product__price'>${price}</p>
									<button onClick={() => handleAddToBasket(id)} className='single-product__btn orange-btn'><span><RiShoppingCart2Line /></span>Bye</button>
								</div>
							</div>
						</div>
						<div className="single-product__discribe discribe">
							<button onClick={(e) => handleChangeActiveButton(e)} type="button" className={`discribe__name-section ${activeDiscribe ? 'active' : ''}`}>Discribe</button>
							<button onClick={(e) => handleChangeActiveButton(e)} type="button" className={`discribe__name-section ${activeComments ? 'active' : ''}`}>Comments</button>
							{activeDiscribe
								?
								<div className="discribe__content">
									<h5 className="discribe__name-product">{name}</h5>
									<div className="discribe__item">
										<p className='discribe__subtitle'>Category: </p>
										<p>{category}</p>
									</div>
									<div className="discribe__item">
										<p className='discribe__subtitle'>Type: </p>
										<p>{type}</p>
									</div>
									<div className="discribe__item">
										<p className="discribe__subtitle">Recomendation:</p>
										<ul className='disribe__list'>
											<li>To achieve the maximum effect, high-quality soil cultivation is required: absence of lumps, leveled field surface, absence of plant remains;</li>
											<li>Soil spraying is carried out within two days, and it is best immediately after sowing;</li>
											<li>In case of insufficient soil moisture after spraying, it is recommended to roll the soil with ring-spur rollers;</li>
											<li>The consumption rate depends on the content of humus in the soil, on low-humus soils it can be slightly reduced;</li>
											<li>Whitening of the first pair of rapeseed leaves may occur, but later it disappears, and the plants have a more developed root system and are better able to withstand low temperatures;</li>
										</ul>
									</div>
								</div>
								:
								<div className="discribe__content comments">
									<form id='comments-form' className="comments__form">
										<Input type="text" placeholder='Name' />
										<Input type="text" placeholder='Email' />
										<textarea className='comments__textarea' cols="30" rows="10" placeholder='Your comment ...'></textarea>
										<input className='orange-btn' type="submit" value="Add comment" />
									</form>
								</div>
							}
						</div>
					</>
				}
			</div>
		</main >
	)
}

export default SingleProduct