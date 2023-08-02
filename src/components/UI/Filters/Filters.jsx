import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { BsArrowLeft } from 'react-icons/bs'
import { useSearchParams } from 'react-router-dom'
import { useGlobalContaxt } from '../../../context'

import { filterFunction, filterSortFunction } from '../../../functions/filterFunction'
import { FilterBox } from './FilterBox'

import './Filters.css'

const Filters = ({ data, searchCategory, changeState, showFilter }) => {
  const { setFilterTypes } = useGlobalContaxt()
  const [searchParams, setSearchParams] = useSearchParams()
  const filterType = filterFunction(data, searchCategory, 'type')
  const filterProduction = filterFunction(data, searchCategory, 'company')
  const filterCalture = filterSortFunction(data, searchCategory, 'culture')
  const searchType = searchParams.get('type')

  const handleFilterType = (e) => {
    const el = e.target.value
    setSearchParams({ type: el, category: searchCategory })
  }
  //price
  const [price, setPrice] = useState({
    $gte: '',
    $lte: ''
  })
  const handleChangePrice = (e, prefix) => {
    if (prefix === 'gte') {
      setPrice(prev => ({ ...prev, $gte: e.target.value }))
    } else {
      setPrice(prev => ({ ...prev, $lte: e.target.value}))
    }
  }
  useEffect(() => {
    let options=[]
      for(const [key,value]of Object.entries(price)){
        if(value){
          options.push(`${key}=${value}`) 
        }
      }
    setFilterTypes(prev =>({...prev,price:options}))
  }, [price])
  return (
    <>
      <div className='filter'>
        <label htmlFor='product-type-0' className='filter__item'>
          <input
            type="radio"
            id='product-type-0'
            onClick={(e) => handleFilterType(e)}
            className={searchType === '' ? "filter__input active" : "filter__input"}
            value=""
            name='product-type'
          />
          <span className='filter__name'>All</span>
          <span className='filter__total'>({data.length})</span>
        </label>
        {filterType.map((filter, i) => (
          <label key={i} htmlFor={`product-type-${i + 1}`} className='filter__item'>
            <input
              type="radio"
              id={`product-type-${i + 1}`}
              onClick={(e) => handleFilterType(e)}
              className={searchType === filter[0] ? "filter__input active" : "filter__input"}
              value={filter[0]}
              name='product-type'
            />
            <span className='filter__name'>{filter[0]}</span>
            <span className='filter__total'>({filter[1]})</span>
          </label>
        ))}
      </div>
      <div className="catalogue__filter filter filter-more">
        <h3 className="filter__title">
          {showFilter && <span onClick={() => changeState(false)}><BsArrowLeft /></span>}
          Filter
        </h3>

        {/* company */}
        <FilterBox subtitle="Company" data={filterProduction} />

        {/* culture */}
        {filterCalture.length > 0
          && <FilterBox subtitle="Culture" data={filterCalture} />}

        {/* price */}
        <div className="filter__box box-price">
          <h5 className="filter__subtitle">Price</h5>
          <div className="filter__item">
            <label htmlFor='price-from' className="filter__name">
              <span>From</span>
              <input type="number" onChange={(e) => handleChangePrice(e, 'gte')} value={price.$gte} name="price-from" id="price-from" />
            </label>
            <label htmlFor='price-to' className="filter__name">
              <span>To</span>
              <input type="number" onChange={(e) => handleChangePrice(e, "lte")} value={price.$lte} name="price-to" id="price-to" />
            </label>
          </div>
        </div>
        {/* must be fixed button in the open filter*/}
        {showFilter && (
          <button
            onClick={() => changeState(false)}
            className="orange-btn">
            Apply
          </button>
        )
        }
      </div>
    </>
  )
}

export default Filters