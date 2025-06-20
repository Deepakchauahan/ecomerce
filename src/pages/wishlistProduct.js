import { useContext } from 'react';
import { CreateProduct } from '../components/context/productContext';
import { Link } from 'react-router-dom';

export default function WishlistProduct() {
    const { productList, setProductList, wishlistProduct, setWishlistProduct } = useContext(CreateProduct)

    const handlerRemoveWhishlist = (id) => {
        setProductList(productList.map(product => product.id == id ? { ...product, fav: "inactive" } : product))
        setWishlistProduct(wishlistProduct.filter(product => product.id !== id))
    }
    return (
        <div>
            <h2>Whishlist Product</h2>
            <p>{wishlistProduct.length}</p>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {wishlistProduct.length > 0 ? wishlistProduct.map(product => (
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
                        <button onClick={() => handlerRemoveWhishlist(product.id)} >Remove</button>
                    </li>
                )) :
                    <li>No Product in Whislist</li>
                }
            </ul>
        </div>
    )
}
