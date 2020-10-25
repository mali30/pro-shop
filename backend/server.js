import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectToMongo from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectToMongo();

const app = express();


app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/products' , productRoutes)

const PORT = process.env.PORT || 8080;
if (!process.env.PORT) {
    console.log(`Port is unavailalbe ${PORT}`)
    process.exit(1);
} else {
    app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
}
