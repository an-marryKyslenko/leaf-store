import React from "react";
import { useContext, useState, useEffect, createContext } from "react";
import { getProducts } from "./api";

const MyContaxt = createContext()

const ProviderContaxt = ({ children }) => {
	const [products, setProducts] = useState([])
	const [openBurger, setOpenBurger] = useState(false)
	const [category, setCategory] = useState('Choose category')
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [openBasket, setOpenBasket] = useState(false)
	const [orderList, setOrderList] = useState([])
	const [filterTypes, setFilterTypes] = useState({
		category: '',
		sort: '',
		company: [],
		price: '',
		name: ''
	})
	const [chosenCompany, setChosenCompany] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const amount = orderList.reduce((acc, item) => {
		const p = acc.totalPrice + item.totalPrice
		const q = acc.quantity + item.quantity

		return { totalPrice: p, quantity: q }
	}, { totalPrice: 0, quantity: 0 })

	async function getProductList() {
		const productList = await getProducts(filterTypes)
		setProducts(productList)
		setIsLoading(false)
	}
	useEffect(() => {
		getProductList()
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
			filterTypes,
			setFilterTypes,
			orderList,
			setOrderList,
			amount,
			isLoading,
			chosenCompany,
			setChosenCompany,

		}}>
			{children}
		</MyContaxt.Provider>
	)
}

export const useGlobalContaxt = () => useContext(MyContaxt)

export { MyContaxt, ProviderContaxt }