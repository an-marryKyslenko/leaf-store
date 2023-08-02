import axios from "axios"

const client = axios.create({
	baseURL: 'https://leaf-store-api-1e132ca5313e.herokuapp.com/api/v1',
	headers: { 'X-Custom-Header': 'foobar' }
})


export async function getProducts(params) {
	try {
		const res = await client.get('/products', {
			params: params
		})
		const { data: { products } } = res
		if (products) {
			const newProducts = products.map(item => {
				const { _id, quantity } = item
				return { ...item, id: _id, total: quantity }
			})
			return newProducts
		} else {
			return []
		}
	} catch (error) {
		console.log(error.message)
	}
}

export async function getUser(path, obj) {
	try {
		const newUser = await client.post(`/auth${path}`, obj)
		const { data: { user, token } } = newUser
		console.log('Success!!!',user.name);
		return user
	} catch (error) {
		console.log(error);
	}
}