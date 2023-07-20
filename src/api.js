import { Buffer } from "buffer";
import { user } from "./data";

const url = 'https://leaf-store-api-1e132ca5313e.herokuapp.com/api/v1'


export async function getProducts(id) {
	try {
		const res = await fetch(`${url}/products`)
		const data = await res.json()
		const { products } = data
		if (products) {
			const newProducts = products.map(item => {
				const { _id, quantity, img } = item
				// decode base64
				const base64 = btoa(new Uint8Array(img.data.data)
				.reduce(function (data, byte) {
					return data + String.fromCharCode(byte);
				}, "")
				)
				const newImg = `data:image/png;base64,${base64}`

				return { ...item, id: _id, total: quantity, image: newImg }
			})
			const dataProducts = id ? newProducts.filter(item => item.id === id)[0] : newProducts
			return dataProducts
		}
		return []
	} catch (error) {
		console.log(error)
	}


}
export async function getUser(creds) {
	const data = (user.email === creds.email) && (user.password === creds.password) ? user : null;
	if (!data) {
		throw {
			message: "No user with those credintials found!",
			statusText: "Bed request",
			status: "400"
		}
	}

}

export async function setUser(creds) {
}