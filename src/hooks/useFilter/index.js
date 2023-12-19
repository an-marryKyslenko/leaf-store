import { useCallback } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useFilter = () => {

	const [filter, setFilter] = useState({
		category: '',
		type: '',
		sort: '',
		company: [],
		price: {
			$gte: '',
			$lte: ''
		}
	})

	const handleChooseCompany = (e) => {
		const value = e.target.value;
		if (filter.company.includes(value)) {
			setFilter(prevFilter => ({
				...prevFilter,
				company: [prevFilter.company.filter(item => item !== value)]
			}))
		} else {
			setFilter(prevFilter => ({
				...prevFilter,
				company: [...prevFilter.company, value]
			}))
		}
	}

	const handleChangePrice = useCallback((e, prefix) => {
		const el = +e.target.value
		if (prefix === 'gte') {
			setFilter(prev => ({ ...prev, price: { ...prev.price, $gte: el } }))
		} else {
			setFilter(prev => ({ ...prev, price: { ...prev.price, $lte: el } }))
		}
	}, [filter.company])


	const setFilters = useCallback((filterFields) => {
		// console.log(filterFields);
		setFilter({
			...filter,
			...filterFields,
			
		})
	}, [filter])

	return {
		filter,
		setFilters,
		handleChangePrice,
		handleChooseCompany
	}
}