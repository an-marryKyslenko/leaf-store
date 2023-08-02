import React from 'react'

import { CiSearch } from 'react-icons/ci'
import { useGlobalContaxt } from '../../../context'

import './Search.css'

const Search = () => {
	const { setFilterTypes } = useGlobalContaxt()
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget;
		const formElement = form.elements.searchField.value
		setFilterTypes(prev=>({...prev,name:formElement}))
	}
	return (
		<form onSubmit={handleSubmit} className="header__search search">
			<input name='searchField' type="text" placeholder='Search ...' className='search__input' />
			<button name='search-bnt' type="submit" className='search__btn'><CiSearch /></button>
		</form>
	)
}

export default Search