import bcrypt from "bcryptjs";

// creating array of 3 users with one Admin
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    // hashing password synchronously for now
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "MO MO",
    email: "momo@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
