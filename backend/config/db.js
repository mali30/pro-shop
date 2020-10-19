import mongoose from 'mongoose'

const connectToMongo = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            }
        )
        console.log(`Connected to MongoDB: ${conn.connection.host}`)
    } catch (error) {
        console.log(`there was an error: ${error}`)
        process.exit(1);
    }
}

export default connectToMongo;