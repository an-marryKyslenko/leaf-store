import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'
import { filterFunction } from '../../functions/filterFunction'
import { text } from '../../data'

import CartProduct from '../../components/CartProduct/CartProduct'
import Title from '../../components/UI/Title/Title'
import Select from '../../components/UI/Select/Select'
import Filters from '../../components/UI/Filters/Filters'
import Pagination from '../../components/UI/Pagination/Pagination'
import Article from '../../components/Article/Article'
import Loading from '../../components/UI/Loading/Loading'

import './Catalogue.css'
import { pagesFunction } from '../../functions/pagesFunction'

const Catalogue = () => {
  const { windowWidth, products, setFilterTypes, isLoading } = useGlobalContaxt()
  const [showFilter, setShowFilter] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchCategory = searchParams.get('category') || ''
  const searchType = searchParams.get('type')
  const filterType = filterFunction(products, 'type')
  const newProducts = searchType ? products.filter(prod => prod.type === searchType) : products
  const pages = pagesFunction(newProducts, 12);

  useEffect(() => {
    setFilterTypes({
      category: searchCategory
    })
    setActivePage(1)
  }, [searchCategory, searchType])
  return (
    <main className="main catalogue">
      <div className="container">
        <div className="main__paths">
          <p className="main__path">Home</p>
          <p className="main__path">Catalogue</p>
          {searchParams.size > 0 && <p className="main__path">{searchCategory}</p>}
        </div>
        {/* title component */}
        <Title title={searchCategory ? searchCategory : "Catologue"} clases="catalogue" secondLeaf />

        <div className="catalogue__content">
          <div className="catalogue__content-top">
            {windowWidth < 768
              ?
              <>
                <button onClick={() => setShowFilter(!showFilter)} className='filters__btn'>Filter</button>
                <Select clases="catalogue" />
                <Select clases="filters" data={filterType} />
                <div style={{ textAlign: 'center' }} className="catalogue__total-products">Show {products.length} products</div>
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
          {isLoading
            ?
            <Loading />
            :
            <div className="catalogue__products">
              {
                newProducts
                  .filter((item, index) => index >= 12 * (activePage - 1) && index < 12 * activePage)
                  .map((product, index) => {
                    return (
                      <CartProduct {...product} key={index} />
                    )
                  })
              }
              <Pagination data={pages} total={12} activePage={activePage} setActivePage={setActivePage} />
            </div>
          }
        </div>


      </div>
      <Article title={searchCategory} text={text} />

    </main>
  )
}

export default Catalogue