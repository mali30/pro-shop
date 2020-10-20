import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors' 

import products from './data/products.js'
import connectToMongo from './config/db.js'

dotenv.config()

connectToMongo();

const app = express();


app.get("/", (req, res) => {
  res.send("API is running");
});

/*
    get all products
*/
app.get("/api/products", (req, res) => {
    res.json(products);
})

/*
    get product for a based on id
*/
app.get("/api/products/:id", (req, res) => {
    const productInURL = products.find((p) => req.params.id === p._id)
    res.json(productInURL);
})

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
