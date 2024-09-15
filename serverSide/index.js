const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const registrationModel = require("./model/registrationModel");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/pune-poorna", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await registrationModel.findOne({ email });

    if (existingUser) {
      // User already exists
      return res.json({ exists: true });
    }

    // Create new user
    const newUser = new registrationModel({ email, password });
    await newUser.save();
    
    // Respond with the newly created user
    res.json({ exists: false, user: newUser });
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
