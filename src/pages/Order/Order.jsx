import React, { Suspense } from 'react'
import { useLoaderData, defer, Await, Link } from 'react-router-dom'

import { getProducts } from '../../api'

import Title from '../../components/UI/Title/Title'

import './Order.css'

export async function loader({ params }) {
  return defer({ product: getProducts(params.id) })
}

const Order = () => {
  const productPromise = useLoaderData()

  return (
    <main className='main order'>
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <a href='#' className="main__path">Order</a>
        </div>
        {/* title component */}
        <Title title="Order" clases="order" secondLeaf />

        <Suspense fallback={<h2 className='title'>Loading...</h2>} >
          <Await resolve={productPromise.product}>
            {product => {
              const { name, price, photo, total, id, type, production, category } = product
              return (
                <form className="order__form form">
                  <div className="form__box personal-info">
                    <h5 className="form__title">Your contacts</h5>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                    <input type="text" placeholder='Telephone' />
                    <input type="text" placeholder='Email' />
                    <textarea name="" cols="30" rows="10" placeholder='Comment ...'></textarea>
                  </div>
                  <div className="form__box delivery">
                    <h5 className="form__title">Delivery</h5>
                    <input type="text" placeholder='Region' />
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='Department' />
                    <input type="text" placeholder='ZIP code' />
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
                      <div className="basket-order__item">
                        <div className="basket-order__img">
                          <img src="" alt="dfdf" />
                        </div>
                        <div className="basket-order__info">
                          <h6 className="basket-order__name">dadfda</h6>
                          <span className='basket-order__price'>$12</span>
                          <span>x1</span>
                        </div>
                        <div className="basket-order__delete">x</div>
                      </div>
                    </div>
                    <div className="basket-order__footer">
                      <div className="basket-order__total">
                        <span >Together: </span>
                        <span>2 products</span>
                      </div>
                      <div className="basket-order__total">
                        <span >Amount:</span>
                        <span>$584</span>
                      </div>
                    </div>
                    <button className='basket-order__btn orange-btn'>Confirm order</button>
                  </div>
                </form>
              )
            }}
          </Await>
        </Suspense>
      </div>
    </main >
  )
}

export default Order