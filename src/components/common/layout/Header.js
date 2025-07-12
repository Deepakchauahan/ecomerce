import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: 10 }}>
        <Link to={"/"}>Home</Link>
        <Link to={"product-wishlist"}>Whislist</Link>
        <Link to={"cart"}>Cart</Link>
        <Link to={"add-product"}>Add Product</Link>
        <Link to={"/client-pagination"}>Client Pagination</Link>
        <Link to={"/server-pagination"}>Server Pagination</Link>
        <Link to={"/infinite-scroll"}>Infinite Scroll</Link>
        <Link to={"/popover"}>Popover</Link>
        <Link to={"/start-pattern"}>Star Pattern</Link>
        <Link to={"/tab-pattern"}>Tab Pattern</Link>
        <Link to={"/file-folder"}>File Folder</Link>
      </nav>
    </header>
  )
}
