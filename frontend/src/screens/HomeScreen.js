
import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
// import product from '../products'

/*
    This component is for the homescreen. Will display all the products we have 
    by passing each product into the Product Component

    Since this is a functional component and we don't define our state in the constructor 
    like a class component, we use the useState hook
*/

const HomeScreen = () => {

    /*
        first paramter -> what we wanna call this state
        second paramter -> function we want to use to manipulate the state

        initially we have products set to an empty array
    */
    const [products, setProducts] = useState([]);

    // will run as soon as component loads
    useEffect(() => {
        const fetchProducts = async () => {
            // destructure data from res instead of doing res.data
            const { data } = await axios.get('api/products')
            setProducts(data);

        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
        <Row>
{products.map((product) => (
  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
    <Product product={product} />
  </Col>
))}
</Row>

            </>

    )
}

export default HomeScreen
