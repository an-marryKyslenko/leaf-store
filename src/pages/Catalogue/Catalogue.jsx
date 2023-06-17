import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'
import './Catalogue.css'

import CartProduct from '../../components/CartProduct/CartProduct'
import Title from '../../components/UI/Title/Title'
import Select from '../../components/UI/Select/Select'
import Filters from '../../components/UI/Filters/Filters'

const Catalogue = () => {
  const { products, windowWidth } = useGlobalContaxt()
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilter,setShowFilter] = useState(false)
  const searchCategory = searchParams.get('category')
  const categoryType = searchCategory.replace(searchCategory[0], searchCategory[0].toUpperCase()) || 'Seeds'
  
  const handleOpenFilter = ()=>{

  }
  return (
    <main className="main catalogue">
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <Link to='catalogue' className="main__path">Catalogue</Link>
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
                <div style={{textAlign: 'center'}} className="catalogue__total-products">Show {products.length} products</div>
              </>
              :
              <>
                <div className="catalogue__total-products">Show {products.length} products</div>
                <Select clases="catalogue" />
              </>
            }

          </div>
          <div className="catalogue__filters">
            <Filters data={products} searchCategory={searchCategory} showFilter={showFilter}/>
          </div>
          <div className="catalogue__products">
            {products.filter((item, index) => index < 12).map((product, index) => {
              return (
                <CartProduct {...product} key={index} />
              )
            })}
            <div className="catalogue__pagination">

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Catalogue