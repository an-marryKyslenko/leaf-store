import React from "react";
import { useContext, useState, createContext , useEffect} from "react";
import { getProducts } from "./api";

const MyContaxt = createContext()

const ProviderContaxt = ({ children }) => {

	const [isLoading,setIsLoading] = useState(true)
	const [products, setProducts] = useState([])
	const [mainCategory, setMainCategory] = useState('seeds')
	const [type, setType] = useState('')
	const [openBurger, setOpenBurger] = useState(false)
	const [category, setCategory] = useState('Choose category')
	const [openBasket, setOpenBasket] = useState(false)
	const [orderList, setOrderList] = useState([])

	useEffect(() => {
		async function getProductList() {
			try {
				const productList = await getProducts({category: mainCategory,type})
				setProducts(productList)
				setIsLoading(false)

			} catch (error) {
				console.log(error.message)
				isLoading(true)
			}
		}
		getProductList()
	}, [mainCategory,type])
	const amount = orderList.reduce((acc, item) => {
		const p = acc.totalPrice + item.totalPrice
		const q = acc.quantity + item.quantity

		return { totalPrice: p, quantity: q }
	}, { totalPrice: 0, quantity: 0 })

	return (
		<MyContaxt.Provider value={{
			products,
			mainCategory,
			type,
			isLoading,
			setMainCategory,
			setType,
			

			setOpenBurger,
			openBurger,
			category,
			setCategory,
			openBasket,
			setOpenBasket,
			orderList,
			setOrderList,
			amount,
		}}>
			{children}
		</MyContaxt.Provider>
	)
}

export const useGlobalContaxt = () => useContext(MyContaxt)

export { MyContaxt, ProviderContaxt }