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
		console.log('success!!!', user);
		localStorage.setItem("token", `Bearer ${token}`)
		localStorage.setItem("userData", JSON.stringify({
			id: user._id,
			name: user.name,
			userEmail: user.email,
			adress: user.adress,
			phone: user.phone
		}))
		return user
	} catch (error) {
		console.log(error);
	}
}
export async function updateUser(path, obj) {
	try {
		const authToken = localStorage.getItem("token")
		const newUser = await client.patch(`/auth/${path}`, obj, {
			headers: {
				Authorization: authToken
			}
		})
		const { data: { user, token } } = newUser
		console.log(user, "Success");
		localStorage.removeItem('userData')
		localStorage.setItem("userData", JSON.stringify({
			id: user._id,
			name: user.name,
			userEmail: user.email,
			adress: user.adress,
			phone: user.phone
		}))
		return user
	} catch (error) {
		console.log(error);
	}
}
export async function deleteUser(path) {
	try {
		const authToken = localStorage.getItem("token")
		await client.delete(`/auth/${path}`, {
			headers: {
				Authorization: authToken
			}
		})
		localStorage.clear()
		console.log('user was deleted!');
	} catch (error) {
		console.log(error);
	}
}

