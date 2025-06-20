import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CreateProduct } from '../components/context/productContext'

export default function AllProduct() {
    const { productList, setProductList, wishlistProduct, setWishlistProduct } = useContext(CreateProduct)
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("all")
    const [catData, setCatData] = useState([])
    const [lowHigh, setLowHigh] = useState(0)
    const [productShow, setProductShow] = useState([])

    useEffect(() => {
        const categoryDat = []
        productList.forEach(element => {
            !categoryDat.includes(element.category) && categoryDat.push(element.category)
        });
        setCatData(categoryDat)
        setProductShow(productList)
    }, [])

    useEffect(() => {
        let updateList = [...productList]
        updateList = updateList.sort((a, b) => a.title < b.title ? -1 : 0)
        if (value !== " ") {
            updateList = updateList.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
        }
        if (category !== "all") {
            updateList = updateList.filter(product => product.category == category)
        }
        if (lowHigh) {
            lowHigh == 1 ? updateList.sort((a, b) => a.price - b.price) : updateList.sort((a, b) => b.price - a.price)
        }

        setProductShow(updateList)
    }, [category, value, lowHigh,productList])

    const handleDeleteProduct = (id) => {
        setProductList(productList.filter(item => item.id !== id))
    }

    const handlerWhishlist = (id) => {
        const wishProduct = productList.map((product => (
            product.id === id ? { ...product, fav: "active" } : product
        )))
        setProductList(wishProduct)
        setWishlistProduct(
            [
                ...wishlistProduct,
                productList.find(product => product.id == id)
            ]
        )
    }

    return (
        <div>
            <h2>All Products</h2>
            <input placeholder='Search by name..' onChange={(e) => setValue(e.target.value)} value={value} />
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value="all">All</option>
                {catData.length > 0 && catData.map((item) => (
                    <option key={item} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
                ))}
            </select>
            <button onClick={() => setLowHigh(1)}>Low to High</button>
            <button onClick={() => setLowHigh(2)}>High to Low</button>
            <p>{productShow.length}</p>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {productShow.length > 0 ? productShow.map(product => (
                    <li key={product.id} style={{ width: "50%" }}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>Name: {product.title}</h3>
                        <p>Description: {product.description}</p>
                        <p>category : {[product.category]}</p>
                        <p>Status: {product.availabilityStatus}</p>
                        <p>Price: <strong>INR {product.price}</strong></p>
                        <p>Discount: <strong>{product.discountPercentage}%</strong></p>
                        <p>Rating : {product.rating}</p>
                        <p>Stock : {product.stock}</p>
                        <div>Tag: <ul>
                            {product.tags.length > 0 && product.tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        </div>
                        <p>Brand : {product.brand}</p>
                        <p>SKU : {product.sku}</p>
                        <p>Warranty : {product.warrantyInformation}</p>
                        <div>Reviews: {(product.reviews.reduce((acc, cur) => acc + cur.rating, 0) / product.reviews.length).toFixed(2)}<ul>
                            {product.reviews.length > 0 && product.reviews.map((review, index) => (
                                <li key={index}>
                                    <p>Rating :{review.rating}</p>
                                    <p>Comment :{review.comment}</p>
                                    <p>Name :{review.reviewerName}</p>
                                </li>
                            ))}
                        </ul>
                        </div>
                        <p>Return Policy : {product.returnPolicy}</p>
                        <Link to={`/product/${product.id}`}>View</Link>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                        <Link to={`/edit-product/${product.id}`}>Edit</Link>
                        <button onClick={() => handlerWhishlist(product.id)} disabled={product.fav === "active"}>{product.fav === "active" ? "Added" : "Add Wishlist"}</button>
                    </li>
                )) :
                    <li>No product</li>
                }
            </ul>
        </div>
    )
}
