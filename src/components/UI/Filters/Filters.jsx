import React from 'react'

import { filterFunction, filterSortFunction } from '../../../functions/filterFunction'
import { FilterBox } from './FilterBox'

import './Filters.css'

const Filters = ({ data, searchCategory,showFilter}) => {
  const filterType = filterFunction(data, searchCategory, 'type')
  const filterProduction = filterFunction(data, searchCategory, 'production')
  const filterCalture = filterSortFunction(data, searchCategory, 'culture')

  return (
    <>
      <div className='filter'>
        {filterType.map((filter, i) => (
          <div key={i} className='filter__item'>
            <span className={i === 0 ? "filter__name active" : "filter__name"}>{filter[0]}</span>
            <span className='filter__total'>({filter[1]})</span>
          </div>
        ))}
      </div>
      <div className={`catalogue__filter filter filter-more ${showFilter && "show"}`}>
        <h3 className="filter__title">Filter</h3>
        <FilterBox subtitle="Manufacturer" data={filterProduction} />
        {filterCalture.length > 0
          && <FilterBox subtitle="Culture" data={filterCalture} />}
        <div className="filter__box box-price">
          <h5 className="filter__subtitle">Price</h5>
          <div className="filter__item">
            <label htmlFor='price-from' className="filter__name">
              <span>From</span>
              <input type="number" name="price-from" id="price-from" />
            </label>
            <label htmlFor='price-to' className="filter__name">
              <span>To</span>
              <input type="number" name="price-to" id="price-to" />
            </label>
          </div>
        </div>
        <button className="orange-btn">Apply</button>
      </div>
    </>
  )
}

export default Filters