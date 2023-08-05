import React from 'react'
import './styles/HistoryOrders.css'

import photo1 from '../../assets/images/item-photo-2.png'
import photo2 from '../../assets/images/item-photo-3.png'

const obj = [
  { name: 'dfadff', photo: photo1, quantity: 1, date: '30.03.2021', price: 20, status: "Delivered" },
  { name: 'dfadff', photo: photo2, quantity: 1, date: '30.03.2021', price: 20, status: "Delivered" }
]

const HistoryOrders = () => {
  
  return (
    <div className='cabinet__information history-orders'>
      <div className="history-orders__content">
        {obj.length > 0
          ?
          obj.map((item, index) => {
            const { name, photo, quantity, date, price } = item
            return (
              <div key={index} className="history-orders__item">
                <div className="history-orders__img">
                  <img src={photo} alt={name} />
                </div>
                <h4 className="history-orders__name">{name}</h4>
                <div className="history-orders__details">
                  <span className='history-orders__quantity'>Quantity x{quantity}</span>
                  <span className='history-orders__date'>{date}</span>
                </div>
                <div className="history-orders__price">{price}$</div>
              </div>
            )
          })
          :
          <>
            <h2 className="history-order__title">Here isn't any orders</h2>
          </>
        }
      </div>
    </div>
  )
}

export default HistoryOrders