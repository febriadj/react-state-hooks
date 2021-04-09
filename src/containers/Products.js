import React, { useState } from 'react'

// components products
import GetProducts from '../components/GetProducts'
import PostProduct from '../components/PostProduct'

export default function Products() {
  // membuat state
  const [products, setProducts] = useState( [] ) // state products berbentuk array
  const [postProduct, setPostProduct] = useState({
    name: '',
    description: ''
  })

  // handle form input saat pengguna mengetik
  function handleChange(event) {
    const { name, value } = event.target
    setPostProduct({ ...postProduct, [name]: value })
  }

  // handle form submit
  function handleSubmit(event) {
    event.preventDefault()

    // menambahkan id products
    postProduct.id = Date.now()
    
    // menambahkan waktu upload ke dalam state products
    const date = new Date()
    postProduct.date = date.toLocaleDateString('id-ID', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
    })

    setProducts((prevState) => [ ...prevState, postProduct ]) // push postProduct ke state Products
    
    // menghapus value dari state postProduct
    setPostProduct({ 
      ...postProduct, 
      name: '', 
      description: ''
    })
  }

  return (
    <div className="products">
      {
        // mapping seluruh products
        products.map((result, index) => {
          return <GetProducts 
            key = { index } // mengisi key dengan nomer index
            products = { result } // mengirim props ke component GetProducts
          />
        })        
      }
      <PostProduct
        // mengirim props ke component PostProduct
        formChange = { (event) => handleChange(event) } // mengembalikan value dari form input
        formSubmit = { function(event) { return handleSubmit(event) } }
        formValue = { postProduct }
      />
    </div>
  )
}