const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { error } = validate(req.body);
    if (error) {
      console.log("Validation Error:", error.details[0].message);
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log("User Already Exists Error");
      return res
        .status(409)
        .send({ message: "User with given email already exists!" });
    }

    const stk = await bcrypt.genSalt(Number(process.env.STK));
    const hashPassword = await bcrypt.hash(req.body.password, stk);

    await new User({ ...req.body, password: hashPassword }).save();
    console.log("User created successfully");
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
