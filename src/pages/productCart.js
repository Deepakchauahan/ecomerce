
import React, { useContext } from 'react'
import { CreateProduct } from '../components/context/productContext'

export default function ProductCart() {
    const { productCart, setProductCart } = useContext(CreateProduct)
    return (
        <div>
            <h2>Cart Total item: {productCart?.length}</h2>
            <table style={{ border: "1px solid #0000", width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Rating</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {productCart.length > 0 ? productCart.map(product => (
                        <tr key={product.id}>
                            <td> <img src={product.thumbnail} alt={product.title} style={{width:100}}/></td>
                            <td>{product.title}</td>
                            <td>{product.category}</td>
                            <td>{product.availabilityStatus}</td>
                            <td>INR {product.quantity*product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.discountPercentage}%</td>
                            <td>{product.rating}</td>
                            <td>{product.brand}</td>
                        </tr>
                    )) : <tr>
                        <td colSpan={8} align='center'>No data available</td></tr>}

                </tbody>
            </table>
        </div>
    )
}
