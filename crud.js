const { connectDB, mongoose } = require('./db');
const{ User } =require('./Models/Users');
const{ Task } =require('./Models/Task');

async function main(){
    await connectDB();

    const Rene = await User.create({ name: "Rene Kogei", email:"kogei@gmail.com"});
    console.log("Created Successfully",Rene);

    // --- READ ---
    const users = await User.find();
    console.log("📌 All users:", users);

    const tasks = await Task.find();
    console.log("📌 All tasks:", tasks);

    // --- UPDATE ---
    const updatedUser = await User.findOneAndUpdate(
      { email: "kogei@gmail.com" },
      { role: "admin" },
      { new: true } // return updated doc
    );
    console.log("✏️ Updated user:", updatedUser);

    const updatedTask = await Task.findOneAndUpdate(
      { title: "Learn CRUD" },
      { status: "in_progress" },
      { new: true }
    );
    console.log("✏️ Updated task:", updatedTask);

    // --- DELETE ---
    await User.deleteOne({ email: "kogei@gmail.com" });
    console.log("🗑️ User deleted");

    await Task.deleteOne({ title: "Learn CRUD" });
    console.log("🗑️ Task deleted");

}

main();