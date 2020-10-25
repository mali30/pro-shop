import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectToMongo from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// setting up .env
dotenv.config()

// method to connect to mongdoDB (as if it wasn't self explanatory already :)
connectToMongo();

// setting up express app
const app = express();

/* setting up middleware
 call next to move to the next stage
 app.use((req,res,next) => {
     console.log("HELLO")
     console.log(req.originalUrl)
     next();
 })
*/

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/products', productRoutes)


// handle 404 errors
app.use(notFound)

// handle 500 errors
app.use(errorHandler)

const PORT = process.env.PORT || 8080;
if (!process.env.PORT) {
    console.log(`Port is unavailalbe ${PORT}`)
    process.exit(1);
} else {
    app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
}
