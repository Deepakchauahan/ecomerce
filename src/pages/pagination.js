import { useContext, useState } from "react"
import { CreateProduct } from "../components/context/productContext"


export default function Pagination() {
  const page_size = 5;

  const { productList } = useContext(CreateProduct)
  const [pageNumber, setPageNumber] = useState(0)

  const start = pageNumber * page_size
  const end = start + page_size
  const totalPage = Math.ceil(productList.length / page_size)

  const handlePage = (index) => {
    setPageNumber(index)
  }
  const handlePrev = () => {
    setPageNumber(prev => prev - 1)
  }
  const handleNext = () => {
    setPageNumber(prev => prev + 1)
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        productList.length > 0 && productList.slice(start, end).map((product) => (
          <div key={product.title} style={{ border: "1px solid #000", padding: 8, width: "23%", }}>
            <img src={product.thumbnail} alt={product.title} width={100} />
            <h3 style={{ fontSize: 16 }}>Name: {product.title} {product.id}</h3>
          </div>
        ))
      }
      <div>
        <button onClick={handlePrev} disabled={pageNumber === 0}>Prev</button>
        {Array.from(Array(totalPage)).map((page, index) => (
          <>
            <button key={index} className={`${index == pageNumber ? "active" : ""}`} onClick={() => handlePage(index)}>{index + 1}</button></>
        ))}
        <button onClick={handleNext} disabled={pageNumber === totalPage - 1}>Next</button>
      </div>
    </div>
  )
}
