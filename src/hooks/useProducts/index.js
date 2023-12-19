import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getProducts } from '../../api'

export const useProducts = (filter) => {
	const [products, setProducts] = useState([]);
	const [specialProducts, setSpecialProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
	const [isSpecialLoading,setIsSpecialLoading] = useState(true)

	useEffect(() => {
		if (filter) {
			const { category, type } = filter;
			async function getProductList() {
				try {
					const productList = await getProducts({ type, category })
					setProducts(productList)
					setIsLoading(false)

				} catch (error) {
					console.log(error.message)
					isLoading(true)
				}
			}
			getProductList()
		}
	}, [filter])

	useEffect(() => {
		async function getProductList() {
			try {
				const productList = await getProducts()
				setSpecialProducts(productList)
				setIsSpecialLoading(false)

			} catch (error) {
				console.log(error.message);
				setIsSpecialLoading(true)
			}
		}
		getProductList()
	}, [])



	return { products, isLoading, specialProducts,isSpecialLoading }
}