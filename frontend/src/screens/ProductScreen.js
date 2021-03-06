import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


/*
    This component will display an image of a product,
    the reviews, price, description, status and the Add to Cart Button
*/

const ProductScreen = ({ match }) => {
    
    // get the product passed in the url.

    const [product, setProduct] = useState([]);

        // will run as soon as component loads
        useEffect(() => {
            const fetchProduct = async () => {
                // destructure data from res instead of doing res.data
                // now getting id from the url using match.params
                const { data } = await axios.get(`/api/products/${match.params.id}`)
                setProduct(data);
    
            }
    
            fetchProduct()
            // stops warning from showing that match.params.id needs to be added
        }, [match])

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go back
            </Link>

            <Row>
                <Col md={6}>
                    {/* fluid keeps image in it's container */}
                    <Image src={product.image} alt={product.name} fluid>   
                    </Image>
                    
                </Col>
                <Col md={3}>
                    {/* flush takes away the border */}
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                {product.name}
                            </h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                
                </Col>
                
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status: 
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                    </Col>

            </Row>
        </>
    )
}

export default ProductScreen
