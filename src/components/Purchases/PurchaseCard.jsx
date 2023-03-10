import React from 'react'
import { formatDate } from '../utils/date'

const PurchaseCard = ({ purchase }) => {

  return (
    <article>
      <div>
        <div>
          <img src={purchase.product.images[0].url} alt="" />
        </div>
        <h4>{purchase.product.title}</h4>
      </div>
      <div>
        <h4>{formatDate(purchase.createdAt)}</h4>
        <div>
          <h4>{purchase.quantity}</h4>
        </div>
        <h4>$ {purchase.quantity.price}</h4>
      </div>
    </article>
  )
}

export default PurchaseCard