import React from 'react'

import { CiSearch } from 'react-icons/ci'

import './Search.css'

const Search = () => {
	return (
		<div className="header__search search">
			<input name='search-field' type="text" placeholder='Search ...' className='search__input' />
			<button name='search-bnt' type="submit" className='search__btn'><CiSearch /></button>
		</div>
	)
}

export default Search