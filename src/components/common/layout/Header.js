import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: 10 }}>
        <Link to={"/"}>Home</Link>
        <Link to={"add-product"}>Add Product</Link>
        <Link to={"all-product"}>All Product</Link>
        <Link to={"product-wishlist"}>Whislist</Link>
        <Link to={"cart"}>Cart</Link>
      </nav>
    </header>
  )
}
