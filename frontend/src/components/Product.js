import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

/*
    This component will display each product on the home screen
    into a Card that holds the image, price, reviews, and name of the product. 
*/


// destructing the props
const Product = ({product}) => {
    return (
        // adds margin on top and bottom
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
            <Link to={`/product/${product._id}`}>
            <Card.Title as='div' >
                 <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews` } />
                    {/* adding rating component now */}
                {/* <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                </div> */}
                </Card.Text>

            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default Product
