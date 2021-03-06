import React from 'react'

export default function PostProducts({ formSubmit, formChange, formValue }) {
  return (
    <div className="products-post">
      <form onSubmit={ formSubmit }>
        <input 
          name = "name"
          placeholder = "masukan nama product"
          onChange = { formChange }
          value = { formValue.name } // value berasal dari state postProducts
        />
        <input 
          name = "description"
          placeholder = "masukan deskripsi singkat tentang product anda"
          onChange = { formChange }
          value = { formValue.description } // value berasal dari state postProducts
        />
        <button type="submit">Submit Product</button>
      </form>
    </div>
  )
}