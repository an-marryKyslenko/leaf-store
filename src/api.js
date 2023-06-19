import { products } from "./data";

function sleep(ms){
	return new Promise(res=>setTimeout(res,ms))
}

export async function getProducts(id){
	await sleep(1000)
	const dataProduct = id ? products[id] : products
	if(!dataProduct){
		throw{
			message: 'Failed to fetch vans',
			statusText: 'Bed request',
			status: '400'
		}
	}
	return dataProduct

}