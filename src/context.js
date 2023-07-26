import React from "react";
import { useContext, useState, useEffect, createContext } from "react";
import { getProducts as dataProducts } from "./api";
const url = 'https://leaf-store-api-1e132ca5313e.herokuapp.com/api/v1'

const MyContaxt = createContext()

const ProviderContaxt = ({ children }) => {
	const [products, setProducts] = useState([])
	const [openBurger, setOpenBurger] = useState(false)
	const [category, setCategory] = useState('')
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [openBasket, setOpenBasket] = useState(false)
	const [orderList, setOrderList] = useState([])
	const [filterTypes, setFilterTypes] = useState({category: ''})
	const [isLoading,setIsLoading] = useState(true)
	const amount = orderList.reduce((acc, item) => {
		const p = acc.totalPrice + item.totalPrice
		const q = acc.quantity + item.quantity

		return { totalPrice: p, quantity: q }
	}, { totalPrice: 0, quantity: 0 })

	async function getProducts(id) {
		try {
			const res = await fetch(`${url}/products?`+ new URLSearchParams(filterTypes))
			const data = await res.json()
			const { products } = data
			if (products) {
				const newProducts = products.map(item => {
					const { _id, quantity,image } = item
				
					return { ...item, id: _id, total: quantity, image}
				})
				const dataProducts = id ? newProducts.filter(item => item.id === id)[0] : newProducts
				setProducts(dataProducts)
				setIsLoading(false)
			} else {
				setProducts([])
			}
		} catch (error) {
			console.log(error.message)
		}
	}
	useEffect(() => {
		getProducts()
	}, [filterTypes])
	useEffect(() => {
		function watch() {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', watch)
		return () => {
			window.removeEventListener('resize', watch)
		}
	}, [])
	return (
		<MyContaxt.Provider value={{
			setOpenBurger,
			openBurger,
			category,
			setCategory,
			products,
			windowWidth,
			openBasket,
			setOpenBasket,
			setFilterTypes,
			orderList,
			setOrderList,
			amount,
			isLoading
		}}>
			{children}
		</MyContaxt.Provider>
	)
}

export const useGlobalContaxt = () => useContext(MyContaxt)

export { MyContaxt, ProviderContaxt }