import { useGlobalContaxt } from "./context";
import { products } from "./data";
function sleep(ms){
	return new Promise(res=>setTimeout(res,ms))
}

export async function getProducts(id){
	await sleep(1000)
	const dataProduct = id ? products.filter(item => item.id === id)[0] : products
	if(!dataProduct){
		throw{
			message: 'Failed to fetch vans',
			statusText: 'Bed request',
			status: '400'
		}
	}
	return dataProduct
	
}
export async function getOrderList (){
	await sleep(1000)
	
}