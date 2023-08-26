const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.port || 3080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://localhost:27017/mern-crud",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connection is made successfully");
    }
  }
);
const users = require("./model/usermodel");

app.post("/signin", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const userData = await users.findOne({ email });
  if (!userData) {
    res.status(404).json({ message: "user not found" });
  }
  if (userData.password === password) {
    res.json(userData._id);
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, password, dob } = req.body;
  const userData = await users.findOne({ email });
  if (userData?.email) {
    res.status(404).json({ message: "user already present" });
  }
  await users.create({ name, email, password, dob });
  res.status(200).json("user created");
});

app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
