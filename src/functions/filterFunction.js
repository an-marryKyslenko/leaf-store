export const filterFunction = (data, category, searchParam) => {
	return Object.entries(data
		.filter(item => item.category === category)
		.reduce((acc, item) => {
			const type = item[searchParam]
			const currCount = Object.hasOwn(acc, type) ? acc[type] : 0
			return {
				...acc,
				[type]: currCount + 1
			}
		}, {}))
}

export const filterSortFunction = (data,category,type) =>{
	let resolt = data
	.filter(item=>Object.hasOwn(item,type) && item.category ===category)
	.flatMap(product => product[type])
	
	return Array.from(new Set(resolt))
}