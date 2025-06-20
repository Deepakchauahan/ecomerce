import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreateProduct } from '../components/context/productContext'

export default function SingleProduct() {
    const { id } = useParams()
    const { productList, productCart, setProductCart } = useContext(CreateProduct)
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(productList.find(item => item.id == id))
    }, [id])

    const handleAddCart = (id) => {
        if (productCart.find((item) => item.id == id)) {
            console.log("already added");

        } else {
            setProductCart(prev => [
                ...prev,
                productList.find((item) => item.id == id)
            ])
        }
    }
    return (
        <div>
            <h2>Product id: {id}</h2>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                <li style={{ width: "50%" }}>
                    {product?.images?.length > 0 && product.images.map((img, i) => (
                        <img src={img} alt={product.title + i} key={img} style={{width:200}}/>
                    ))}
                    <h3>Name: {product.title}</h3>
                    <p>Description: {product.description}</p>
                    <p>category : {[product.category]}</p>
                    <p>Status: {product.availabilityStatus}</p>
                    <p>Price: <strong>INR {product.price}</strong></p>
                    <p>Discount: <strong>{product.discountPercentage}%</strong></p>
                    <p>Rating : {product.rating}</p>
                    <p>Stock : {product.stock}</p>
                    <div>Tag: <ul>
                        {product?.tags?.length > 0 && product.tags.map(tag => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    </div>
                    <p>Brand : {product.brand}</p>
                    <p>SKU : {product.sku}</p>
                    <p>Warranty : {product.warrantyInformation}</p>
                    <div>Reviews: {product?.reviews?.length > 0 && (product.reviews.reduce((acc, cur) => acc + cur.rating, 0) / product.reviews.length).toFixed(2)}<ul>
                        {product?.reviews?.length > 0 && product.reviews.map((review, index) => (
                            <li key={index}>
                                <p>Rating :{review.rating}</p>
                                <p>Comment :{review.comment}</p>
                                <p>Name :{review.reviewerName}</p>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <p>Return Policy : {product.returnPolicy}</p>
                    <button onClick={() => handleAddCart(id)} disabled={productCart.find((item) => item.id == id)}>{productCart.find((item) => item.id == id) ? "Added" : "Add to cart"}</button>
                </li>

            </ul>
        </div>
    )
}
