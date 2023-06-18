import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'
import './Catalogue.css'
import { filterFunction } from '../../functions/filterFunction'

import CartProduct from '../../components/CartProduct/CartProduct'
import Title from '../../components/UI/Title/Title'
import Select from '../../components/UI/Select/Select'
import Filters from '../../components/UI/Filters/Filters'
import Pagination from '../../components/UI/Pagination/Pagination'

const Catalogue = () => {
  const { products, windowWidth } = useGlobalContaxt()
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilter,setShowFilter] = useState(false)
  const searchCategory = searchParams.get('category')
  const categoryType = searchCategory.replace(searchCategory[0], searchCategory[0].toUpperCase()) || 'Seeds'
  const filterType = filterFunction(products, searchCategory, 'type')
  const totalItem = 12;

  return (
    <main className="main catalogue">
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <a href='#' className="main__path">Catalogue</a>
          <Link to={`catalogue?catalogue=${searchCategory}`} className="main__path">{categoryType}</Link>
        </div>
        {/* title component */}
        <Title title={categoryType} clases="catalogue" secondLeaf />
        <div className="catalogue__content">
          <div className="catalogue__content-top">

            {windowWidth < 768
              ?
              <>
                <button onClick={()=>setShowFilter(!showFilter)} className='filters__btn'>Filter</button>
                <Select clases="catalogue" />
                <Select clases="filters" data={filterType}/>
                <div style={{textAlign: 'center'}} className="catalogue__total-products">Show {products.length} products</div>
              </>
              :
              <>
                <div className="catalogue__total-products">Show {products.length} products</div>
                <Select clases="catalogue" />
              </>
            }

          </div>
          <div className={`catalogue__filters filters ${showFilter && "show"}`}>
            <Filters 
            data={products} 
            searchCategory={searchCategory} 
            changeState={setShowFilter}
            showFilter={showFilter}
            />
          </div>
          <div className="catalogue__products">
            {products.filter((item, index) => index < totalItem).map((product, index) => {
              return (
                <CartProduct {...product} key={index} />
              )
            })}
            <Pagination data={products} total={totalItem}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Catalogue