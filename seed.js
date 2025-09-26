const { connectDB, mongoose } = require('./db');
const{ User } =require('./Models/Users');
const{ Task } =require('./Models/Task');
const { connection } = require('mongoose');
require('dotenv').config();


async function main() {
    await connectDB();

    await User.deleteMany({});
    await Task.deleteMany({});

    await User.insertMany([
        {name: "Alice ", email:"alice@example.com",role:"admin"},
        { name: "Fay", email: "fay@example.com" },
        { name: "John Doe", email: "john@example.com", role: "user" },
        { name: "Mark Lee", email: "mark@example.com", role: "user" },
        { name: "Jane Brown", email: "jane@example.com" }
    ]);

    await Task.insertMany([
          { title: "Build MERN App", status: "in_progress", owner: "Fay" },
          { title: "Write Blog Post", status: "todo", owner: "Alice" },
          { title: "Fix Login Bug", status: "done", owner: "John" }
    ]);

    console.log("Data populated.")
    await mongoose.disconnect();
}

main();