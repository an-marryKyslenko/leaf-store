import React from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Catalogue from './pages/Catalogue/Catalogue'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Loyout from './components/Loyout'
import Authorization from './pages/Authorization/Authorization'
import Contacts from './pages/Contacts/Contacts'
import './App.css';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<Loyout/>}>
			<Route index element={<Home/>}/>
			<Route path='catalogue' element={<Catalogue/>}/>
			<Route path='about' element={<About/>}/>
			<Route path='authorization' element={<Authorization/>}/>
			<Route path='contacts' element={<Contacts/>}/>
		</Route>
	))
	return <RouterProvider router={router}/>
}

export default App;
