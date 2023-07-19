import React, { useCallback } from "react";
import { useContext, useState, useEffect, createContext } from "react";
import { useSearchParams } from "react-router-dom";

const url = 'https://leaf-store-api-1e132ca5313e.herokuapp.com/api/v1'

const MyContaxt = createContext()

const ProviderContaxt = ({ children }) => {
	const [products, setProducts] = useState({})
	const [openBurger, setOpenBurger] = useState(false)
	const [category, setCategory] = useState('Seed')
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [openBasket, setOpenBasket] = useState(false)
	const [orderList, setOrderList] = useState([])

	const amount = orderList.reduce((acc, item) => {
		const p = acc.totalPrice + item.totalPrice
		const q = acc.quantity + item.quantity

		return { totalPrice: p, quantity: q }
	}, { totalPrice: 0, quantity: 0 })

	async function getProducts() {
		try {
			const res = await fetch(`${url}/products`)
			const data = await res.json()
			const { products } = data
			setProducts(products)
		} catch (error) {
			console.log(error)
		}


	}
	useEffect(() => {
		getProducts()
	}, [])
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
			windowWidth,
			products,
			openBasket,
			setOpenBasket,
			orderList,
			setOrderList,
			amount
		}}>
			{children}
		</MyContaxt.Provider>
	)
}

export const useGlobalContaxt = () => useContext(MyContaxt)

export { MyContaxt, ProviderContaxt }