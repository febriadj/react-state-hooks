import React from 'react'

export default function GetProducts({ products }) {
  return (
    <div className="products-card">
      <h2 className="name">{ products.name }</h2>
      <p className="description">{ products.description }</p>
      <p>{ products.date }</p>
    </div>
  )
}