import React from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Catalogue, { loader as loaderCatalogue } from './pages/Catalogue/Catalogue'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Loyout from './components/Loyout'
import Authorization from './pages/Authorization/Authorization'
import Contacts from './pages/Contacts/Contacts'
import SingleProduct, { loader as loaderSingleProduct } from './pages/SingleProduct/SingleProduct'
import Order,{loader as orderLoader} from './pages/Order/Order'
import NotFound from './pages/NotFound'
import Error from './components/Error/Error'

import './App.css';

function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<Loyout />}>
			<Route index element={<Home />} />
			<Route
				loader={loaderCatalogue}
				path='catalogue'
				element={<Catalogue />}
				errorElement={<Error />}
			/>
			<Route
				loader={loaderSingleProduct}
				path='catalogue/:id'
				element={<SingleProduct />}
				errorElement={<Error />}
			/>
			<Route
				path="order"
				element={<Order />}
				loader={orderLoader}
				errorElement={<Error/>}
			/>
			<Route path='about' element={<About />} />
			<Route path='authorization' element={<Authorization />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	))
	return <RouterProvider router={router} />
}

export default App;
