import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
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
import { FILTER } from '../../const'
import { useProducts } from '../../hooks/useProducts'
import { useGlobalContaxt } from '../../context'

const Catalogue = () => {
  const {products,mainCategory, isLoading} = useGlobalContaxt()
  const [searchParams] = useSearchParams();
  // const [category, setCategory] = useState(searchParams.get('category') || 'seeds');
  // const [type, setType] = useState(searchParams.get('type') || '')

  // const { products, isLoading } = useProducts({ category, type })

  const windowWidth = window.innerWidth
  const [showFilter, setShowFilter] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const pages = pagesFunction(products, 12);
  const filterCategory = FILTER.find(item => item.category === mainCategory)
  console.log('hello');
  return (
    <main className="main catalogue">
      <div className="container">
        <div className="main__paths">
          <p className="main__path">Home</p>
          <p className="main__path">Catalogue</p>
          {searchParams.size > 0 && <p className="main__path">{mainCategory}</p>}
        </div>
        {/* title component */}
        <Title title={mainCategory ? mainCategory : "Catologue"} clases="catalogue" secondLeaf />

        <div className="catalogue__content">
          <div className="catalogue__content-top">
            {windowWidth < 768
              ?
              <>
                <button onClick={() => setShowFilter(!showFilter)} className='filters__btn'>Filter</button>
                <Select clases="catalogue" />
                <Select clases="filters" data={filterCategory.type} />
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
              changeState={setShowFilter}
              showFilter={showFilter}
            />
          </div>
          {isLoading
            ?
            <Loading />
            :
            <div className="catalogue__products">
              {products.length > 0
                ?
                <>
                  {
                    products
                      .filter((item, index) => index >= 12 * (activePage - 1) && index < 12 * activePage)
                      .map((product, index) => {
                        return (
                          <CartProduct {...product} key={index} />
                        )
                      })
                  }
                </>
                :
                <h2 className='catalogue__not-found'>No any products</h2>
              }
              <Pagination data={pages} total={12} activePage={activePage} setActivePage={setActivePage} />
            </div>
          }
        </div>


      </div>
      <Article title={mainCategory} text={text} />

    </main>
  )
}

export default Catalogue