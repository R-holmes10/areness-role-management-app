// routes/auth.js
const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body); 

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("User Not Found Error");
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      console.log("Invalid Password Error");
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const token = user.generateAuthToken();
    const role = user.role;

    console.log("Login Successful - Token and Role:", token, role);
    res.status(200).send({
      data: { token, role, userName: user.userName },
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
