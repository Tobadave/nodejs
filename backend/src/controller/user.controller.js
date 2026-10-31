import { User } from "../models/user.models.js";

const registerUser = async (req, res) => {
  try {
    //put all these val in "req.body"
    const { username, email, password } = req.body;

    //basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All the fields are important" });
    }

    //check if user exists
    const existing = await User.findOne({ email: email.toLowerCase() }); //finding the user by the username

    //check if the user exists already
    if (existing) {
      return res.status(400).json({ message: "User already exists!" });
    }

    //now create user
    const user = await User.create({
      username,
      email: email.toLowerCase(), //set to lowercase
      password,
      loggedIn: false, //false by default
    });

    res.status(201).json({
      message: "User registered",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export { registerUser };
