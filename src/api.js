import { products,user } from "./data";

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
export async function getUser (creds){
	await sleep(1000);
	const data = user.email === creds.email && user.password || creds.password ? user : null;
	if(!data){
		throw{
			message: "No user with those credintials found!",
			statusText: "Bed request",
			status: "400"
		}
	}
	
}

export async function setUser(creds){
	await sleep(1000)
}