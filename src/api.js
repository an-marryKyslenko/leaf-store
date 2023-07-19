import { useCallback } from "react";
import { products,user } from "./data";

const url = 'https://leaf-store-api-1e132ca5313e.herokuapp.com/api/v1'


export async function getProducts(id){
		try {
			const res = await fetch(`${url}/products`)
			const data = await res.json()
			const {products} = data
			const dataProduct = id ? products.filter(item => item.id === id)[0] : products
			return dataProduct
		} catch (error) {
			console.log(error)
		}
	
	
}
export async function getUser (creds){
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
}