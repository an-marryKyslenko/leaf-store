import React from 'react'
import {CgClose} from 'react-icons/cg'
import './styles/CurrentOrders.css'
import { useState } from 'react'

const obj = [
  { name: 'dfadff', photo: "dadf", quantity: 1, date: '30.03.2021', price: 20, status: "Delivered" },
  { name: 'dfadff', photo: "dadf", quantity: 1, date: '30.03.2021', price: 20, status: "Delivered" }
]
const CurrentOrder = () => {
  const [items,setItems]=useState(obj)
  const deleteItem = (id)=>{
    setItems((prev)=>(prev.filter((item,index)=>index !== id)))
  }
  return (
    <div className='cabinet__information cur-orders'>
      <div className="cur-order__content">
        {items.length > 0
          ?
          items.map((item, index) => {
            const { name, photo, quantity, date, status, price } = item
            return (
              <div key={index} className="cur-orders__item">
                <div className="cur-orders__img">
                  <img src={photo} alt={name} />
                </div>
                <h4 className="cur-orders__name">{name}</h4>
                <div className="cur-orders__details">
                  <span className='cur-orders__quantity'>Quantity x{quantity}</span>
                  <span className='cur-orders__date'>{date}</span>
                  <span className='cur-orders__status'>{status}</span>
                </div>
                <div className="cur-orders__price">{price}$</div>
                <button type='button' onClick={()=>deleteItem(index)} className='cur-orders__delete'><CgClose/></button>
              </div>
            )
          })
          :
          <>
            <h2 className="cur-order__title">Here isn't any orders</h2>
          </>
        }
      </div>
    </div>
  )
}

export default CurrentOrder