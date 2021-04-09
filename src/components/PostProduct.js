import React from 'react'

export default function PostProducts({ formSubmit, formChange }) {
  return (
    <div className="products-post">
      <form onSubmit={ formSubmit }>
        <input 
          name = "name"
          placeholder = "masukan nama product"
          onChange = { formChange }
        />
        <input 
          name = "description"
          placeholder = "masukan deskripsi singkat tentang product anda"
          onChange = { formChange }
        />
        <button type="submit">Submit Product</button>
      </form>
    </div>
  )
}