import User from "../modals/user.modal.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created sucessfully");
  } catch (error) {
    next(error);
    //    (550,'error from the function'));
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const Validuser = await User.findOne({ email });
    if (!Validuser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, Validuser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credentials"));
    const token = jwt.sign({id:Validuser._id},process.env.JWT_SECRET);
    res.cookie('access_token',token,{httpOnly:true})
    .status(200)
    .json(Validuser);
  } catch (errro) {
    next(errorHandler(500, "Server error"));
  }
};
