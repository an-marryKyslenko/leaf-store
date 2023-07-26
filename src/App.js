import React from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Catalogue from './pages/Catalogue/Catalogue'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Loyout from './components/Loyout'
import Auth, { loader as authLoadeer, action as authAction } from './pages/Auth/Auth'
import Contacts from './pages/Contacts/Contacts'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Order from './pages/Order/Order'
import NotFound from './pages/NotFound'
import Error from './components/Error/Error'

import './App.css';

function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<Loyout />}>
			<Route
				index
				element={<Home />}
				errorElement={<Error />}
			/>
			<Route
				path='catalogue'
				element={<Catalogue />}
				errorElement={<Error />}
			/>
			<Route
				path='catalogue/:id'
				element={<SingleProduct />}
				errorElement={<Error />}
			/>
			<Route
				path="order"
				element={<Order />}
				errorElement={<Error />}
			/>
			<Route
				path='registration'
				element={<Auth />}
				loader={authLoadeer}
				action={authAction}
				errorElement={<Error />}
			/>
			<Route
				path='login'
				element={<Auth />}
				action={authAction}
				loader={authLoadeer}
				errorElement={<Error />}
			/>
			<Route path='about' element={<About />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	))
	return <RouterProvider router={router} />
}

export default App;
