import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, useSearchParams } from 'react-router-dom'

import './Catalogue.css'

import CartProduct from '../../components/CartProduct/CartProduct'
import Title from '../../components/UI/Title/Title'
import { useGlobalContaxt } from '../../context'
import { useState } from 'react'

const Catalogue = () => {
  const {products} = useGlobalContaxt()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isOpenSelect,setIsOpenSelect]= useState(false)
  const searchCategory = searchParams.get('category')
  const categoryType = searchCategory.replace(searchCategory[0], searchCategory[0].toUpperCase()) || 'Seeds'
  const handleSelect = (e)=>{
    if(isOpenSelect){
      setIsOpenSelect(false)
    }
  }
  const filterType = Object.entries(products
    .filter(item=>item.category === searchCategory)
    .reduce((acc,item)=>{
    const type =  item.type 
    const currCount = Object.hasOwn(acc,type) ? acc[type] : 0
    return {
      ...acc,
      [type]: currCount + 1
    }
  },{}))

  return (
    <main className="main catalogue">
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <Link to='catalogue' className="main__path">Catalogue</Link>
          <Link to={`catalogue?catalogue=${searchCategory}`} className="main__path">{categoryType}</Link>
        </div>
        <Title title={categoryType} clases="catalogue" secondLeaf/>
        <div className="catalogue__content">
          <div className="catalogue__total-products">Show {products.length} products</div>
          <div className="catalgoue__select select">
            <div className={`select__drobdown ${isOpenSelect && 'active'}`}>
              <span className="select__title" onClick={()=>setIsOpenSelect(!isOpenSelect)}>Select by name: <span><IoIosArrowDown /></span></span>
              <div className="select__list">
                <span className="select__option">Select by price (up)</span>
                <span className="select__option">Select by price (down)</span>
                <span className="select__option">Select by name (A-Z)</span>
                <span className="select__option">Select by name (Z-A)</span>
              </div>
            </div>
          </div>
          <div className="catalogue__filters">
            <div className='catalogue__filter filter'>
              {filterType.map((filter,i)=>(
                <div key={i} className='filter__item'>
                  <span className={i===0 ?"filter__name active": "filter__name"}>{filter[0]}</span>
                  <span className='filter__total'>({filter[1]})</span>
                </div>
              ))}
            </div>
            <div className="catalogue__filter filter filter-more">
              <h3 className="filter__title">Filter</h3>
              <div className="filter__box">
                <h5 className="filter__subtitle">Production</h5>
              </div>
            </div>
          </div>
          <div className="catalogue__products">
            {products.filter((item,index)=>index < 12 ).map((product,index)=>{
              return (
                <CartProduct {...product} key={index}/>
              )
            }) }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Catalogue