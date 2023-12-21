import React from 'react'
import { useState } from 'react'

import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useGlobalContaxt } from '../../../context'

import './Search.css'

const Search = () => {
	const { products } = useGlobalContaxt()
	const [searchProducts, setSearchProducts] = useState([])
	const [openList, setOpenList] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget;
		const formElement = form.elements.searchField.value
		// setFilterTypes(prev => ({ ...prev, name: formElement }))
		let re = new RegExp(`(${formElement})`, "i")
		const newProducts = products.filter((item) => re.test(item.name))
		setSearchProducts(newProducts)
		setOpenList(true)
	}
	return (
		<form onSubmit={handleSubmit} className="header__search search">
			<input name='searchField' type="text" placeholder='Search ...' className='search__input' />
			<button aria-label='searchButton' type="submit" className='search__btn'><CiSearch /></button>
			{openList
				?
				<div className="search__product-items">
					{searchProducts.map((item, index) => {
						const { name, image, price, id } = item
						if (index <= 5) {
							return (
								<Link
									key={index}
									to={`/catalogue/${id}`}
									className="search__product-item item-search"
									onClick={()=>setOpenList(false)}
								>
									<div className="item-search__img">
										<img src={image} alt={name} />
									</div>
									<h5 className="item-search__name">{name}</h5>
									<p className='item-search__price'>{price}$</p>
								</Link>
							)
						}
					})}
				</div>
				:
				<></>
			}
		</form>
	)
}

export default Search