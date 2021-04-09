import React from 'react'

export default function GetProducts({ products, deleteProduct }) {
  return (
    <div className="products-card">
      <button 
        value = { products.id }
        onClick = { deleteProduct }
      > Delete Product
      </button>
      <h2 className="name">{ products.name }</h2>
      <p className="description">{ products.description }</p>
      <p>{ products.date }</p>
    </div>
  )
}