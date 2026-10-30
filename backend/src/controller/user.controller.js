import { User } from "../models/user.models";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All the fields are important" });
    }

    //check if user exists
    const existing = await User.findOne({ email: email.toLowerCase() });
  } catch (error) {}
};
