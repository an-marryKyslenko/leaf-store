import React from "react";
import { useContext, useState, useEffect,createContext } from "react";
import { useSearchParams } from "react-router-dom";
const MyContaxt = createContext()

const ProviderContaxt = ({ children }) => {
	const [openBurger, setOpenBurger] = useState(false)
	const [category, setCategory] = useState('Seed')
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [isHome,setIsHome] = useState(false)

	useEffect(() => {
		function watch() {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', watch)
		return () => {
			window.removeEventListener('resize', watch)
		}
	}, [])
	return (
		<MyContaxt.Provider value={{
			setOpenBurger,
			openBurger,
			category,
			setCategory,
			windowWidth,
			isHome,
		}}>
			{children}
		</MyContaxt.Provider>
	)
}

export const useGlobalContaxt = () => useContext(MyContaxt)

export { MyContaxt, ProviderContaxt }