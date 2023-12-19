import React, { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useSearchParams } from 'react-router-dom'
import { FILTER } from '../../../const'
import { useGlobalContaxt } from '../../../context'

import { useFilter } from '../../../hooks/useFilter'
import { FilterBox } from './FilterBox'

import './Filters.css'

const Filters = ({ changeState, showFilter }) => {
  const {mainCategory, type,setType} = useGlobalContaxt()
  const {
    filter,
    handleChangePrice,
  } = useFilter()
  
  const category = mainCategory

  const [filterCategory, setFilterCategory] = useState(FILTER.find(item => item.category === category))

  const handleChangeType = useCallback((e) => {
    setType(e.target.value)
  },[type])

  useEffect(() => {
    setFilterCategory(FILTER.find(item => item.category === category))
  }, [category])
  return (
    <>
      <div className='filter'>
        <label
          htmlFor='filter-type-all'
          className={type === '' ? "filter__item active" : "filter__item"}
        >
          <input
            type="radio"
            className='filter__input'
            id='filter-type-all'
            onClick={(e) => handleChangeType(e)}
            value=""
            name='product-type'
          />
          <span className='filter__name'>All</span>
        </label>
        {filterCategory.type.map((item, index) => (
          <label
            key={index}
            htmlFor={`filter-type-${index}`}
            className={type === item ? "filter__item active" : "filter__item"}
          >
            <input
              className='filter__input'
              type="radio"
              id={`filter-type-${index}`}
              onClick={(e) => handleChangeType(e)}
              value={item}
              name='product-type'
            />
            <span className='filter__name'>{item}</span>
          </label>
        ))}
      </div>
      <div className="catalogue__filter filter filter-more">
        <h3 className="filter__title">
          {showFilter && <span onClick={() => changeState(false)}><BsArrowLeft /></span>}
          Filter
        </h3>

        {/* company */}
        {/* <FilterBox subtitle="Company" data={filterCategory.company} onClick={handleChooseCompany} /> */}

        {/* culture */}
        {/* {filterCalture.length > 0 */}
        {/* // && <FilterBox subtitle="Culture" data={filterCalture} />} */}

        {/* price */}
        <div className="filter__box box-price">
          <h5 className="filter__subtitle">Price</h5>
          <div className="filter__item">
            <label htmlFor='price-from' className="filter__name">
              <span>From</span>
              <input type="number" onChange={(e) => handleChangePrice(e, 'gte')} value={filter.price.$gte} name="price-from" id="price-from" />
            </label>
            <label htmlFor='price-to' className="filter__name">
              <span>To</span>
              <input type="number" onChange={(e) => handleChangePrice(e, "lte")} value={filter.price.$lte} name="price-to" id="price-to" />
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