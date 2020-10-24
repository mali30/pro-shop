import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // individual review rating
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    // which admin created which product 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // creates relationship between product and user
        ref: 'User'
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: boolean,
        required: true,
    },
    reviews: [reviewSchema],
    // average rating for all reviews 
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    // for createdAt and updatedAt fields
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product;