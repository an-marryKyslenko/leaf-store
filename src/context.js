import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const MyContaxt = createContext()

const ProviderContaxt = ({children})=>{

	return (
		<MyContaxt.Provider value=''>
			{children}
		</MyContaxt.Provider>
	)
}

export const useGlobalContaxt = () => useContext(MyContaxt)

export {MyContaxt,ProviderContaxt}