// script to import and destroy data
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // first we delete all data in db
    // returns a promise to we must add await
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // getting the array of users we are inserting
    const createdUser = await User.insertMany(users);

    // grabbing admin user and we know it's first in our array
    const adminUser = createdUser[0]._id;

    // adding the adminUser to the correct user
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    // insering products
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error occured ${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // returns a promise to we must add await
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error occured ${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
