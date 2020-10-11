
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import product from '../products'

/*
    This component is for the homescreen. Will display all the products we have 
    by passing each product into the Product Component
*/

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
        <Row>
{product.map((products) => (
  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
    <Product product={products} />
  </Col>
))}
</Row>

            </>

    )
}

export default HomeScreen
