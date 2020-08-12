import React from 'react'
import formatCurrency from './../utils';

export default function Products({products, addToCart}) {
    return (
        <ul className="products">
            {products.map(product => (
                <li key={product._id}>
                    <div className="product">
                        <a href={`#${product._id}`}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                            <div>
                                {formatCurrency(product.price)}
                            </div>
                            <button onClick={ () => addToCart(product) } className="button primary">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
