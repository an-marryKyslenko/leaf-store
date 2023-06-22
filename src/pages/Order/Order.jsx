import React, { Suspense } from 'react'
import { useState } from 'react'
import { useLoaderData, defer, Await, Link } from 'react-router-dom'

import { getProducts } from '../../api'
import Input from '../../components/UI/Inputs/Input'
import OrderProduct from '../../components/UI/OrderProduct/OrderProduct'

import Title from '../../components/UI/Title/Title'
import { useGlobalContaxt } from '../../context'

import './Order.css'

export async function loader() {
  return defer({ products: getProducts() })
}

const Order = () => {
  const productPromise = useLoaderData()
  const {orderList,setOrderList,amount} = useGlobalContaxt()
  const [isOrdered,setIsOrdered] = useState(false)
  


  return (
    <main className='main order'>
      {!isOrdered
      ?
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <a href='#' className="main__path">Order</a>
        </div>
        {/* title component */}
        <Title title="Order" clases="order" secondLeaf />

        <Suspense fallback={<h2 className='title'>Loading...</h2>} >
          <Await resolve={productPromise.products}>
            {products => {
              const listOrder = products.filter(item=>orderList.some(product=>product.id === item.id ))
              
              return (
                <form className="order__form form">
                  <div className="form__box personal-info">
                    <h5 className="form__title">Your contacts</h5>
                    <Input type="text" placeholder='First name'/>
                    <Input type="text" placeholder='Last name' />
                    <Input type="text" placeholder='Telephone' />
                    <Input type="text" placeholder='Email' />
                    <textarea name="" cols="30" rows="10" placeholder='Comment ...'></textarea>
                  </div>
                  <div className="form__box delivery">
                    <h5 className="form__title">Delivery</h5>
                    <Input type="text" placeholder='Region' />
                    <Input type="text" placeholder='City' />
                    <Input type="text" placeholder='Department' />
                    <Input type="text" placeholder='ZIP code' />
                  </div>
                  <div className="form__box payment">
                    <h5 className="form__title">Payment</h5>
                    <label htmlFor="cash">
                      <input type="radio" name="paymant" id="cash" value='cash' />
                      <span>Cash</span>
                    </label>
                    <label htmlFor="card">
                      <input type="radio" name="paymant" id="card" value='card' />
                      <span>By card</span>
                    </label>
                    <label htmlFor="card-online">
                      <input type="radio" name="paymant" id="card-online" value='card-online' />
                      <span>By card online</span>
                    </label>
                  </div>
                  <div className="order__basket basket-order">
                    <h5 className="basket-order__title">Products in basket</h5>
                    <div className="basket-order__list">
                      {listOrder.length < 1
                      ?
                      <p className='basket-order__text'>No any product!</p>
                      :
                      listOrder.map(product=>(
                        <OrderProduct key={product.id} {...product}/>
                      ))
                        
                      }
                    </div>
                    <div className="basket-order__footer">
                      <div className="basket-order__total">
                        <span >Together: </span>
                        <span>{amount.quantity === 1 ? amount.quantity + ' product': amount.quantity + ' products'}</span>
                      </div>
                      <div className="basket-order__total">
                        <span >Amount:</span>
                        <span>$ {amount.totalPrice}</span>
                      </div>
                    </div>
                    <button onClick={()=>setIsOrdered(true)} className='basket-order__btn orange-btn'>Confirm order</button>
                  </div>
                </form>
              )
            }}
          </Await>
        </Suspense>
      </div>
      :
      <section className="ordered">
        <div className="container">
          <Title clases="ordered" title="Thanks for order" secondLeaf/>
          <p className="ordered__text">
          Our manager will contact you soon and send you the order
          </p>
          <Link to="/catalogue?category=seeds" className='orange-btn'>Continue shopping</Link>
          <Link to="/"  className='ordered__btn'>Return to the main page</Link>
        </div>
      </section>
    }
    </main >
  )
}

export default Order