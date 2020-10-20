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
        console.log(`Connected to MongoDB: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`there was an error: ${error}`.red.underline.bold)
        process.exit(1);
    }
}

export default connectToMongo;