import React from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Catalogue from './pages/Catalogue/Catalogue'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Loyout from './components/Loyout'
import Contacts from './pages/Contacts/Contacts'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Order from './pages/Order/Order'
import NotFound from './pages/NotFound'
import Error from './components/Error/Error'

import './App.css';
import Register from './pages/Auth/Register'
import Login,{action as actionLogin}from './pages/Auth/Login'
import PersonalLayout from './pages/PersonalCabinet/PersonalLayout'
import CurrentOrder from './pages/PersonalCabinet/CurrentOrder'
import PersonalData from './pages/PersonalCabinet/PersonalData'
import ChangePassword from './pages/PersonalCabinet/ChangePassword'
import MyCabinet from './pages/PersonalCabinet/MyCabinet'
import HistoryOrders from './pages/PersonalCabinet/HistoryOrders'

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
				path='register'
				element={<Register/>}
				errorElement={<Error />}
			/>
			<Route
				path='login'
				element={<Login/>}
				errorElement={<Error />}
				action={actionLogin}
			/>
			<Route
				path='personal-cabinet'
				element={<PersonalLayout/>}
				errorElement={<Error />}
			>
				<Route index element={<MyCabinet/>} errorElement={<Error/>}/>
				<Route path='current-orders' element={<CurrentOrder/>}/>
				<Route path='personal-data' element={<PersonalData/>} errorElement={<Error/>}/>
				<Route path='change-password' element={<ChangePassword/>} errorElement={<Error/>}/>
				<Route path='history-orders' element={<HistoryOrders/>} errorElement={<Error/>}/>
			</Route>
			<Route path='about' element={<About />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	))
	return <RouterProvider router={router} />
}

export default App;
