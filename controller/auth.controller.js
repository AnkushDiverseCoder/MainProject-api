import User from "../model/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register Route http://localhost:8000/api/auth/register
export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send({ msg: "User has been created.", newUser });
  } catch (err) {
    next(err);
  }
};

// Login Route http://localhost:8000/api/auth/login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong password or email!"));

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        isStaff: user.isStaff,
        isEmployee: user.isEmployee,
      },
      process.env.JWT_KEY
    );

    res
      .status(200)
      .json({token});
  } catch (err) {
    next(err);
  }
};

// Logout Route http://localhost:8000/api/auth/logout
export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

// VerifyToken Route http://localhost:8000/api/auth/verify
export const verify = async (req, res, next) => {
  try {
    const { token } = req.body;
    if(!token) return res.json({ msg: "Please Login", status: "false" });
    
    const { id, isAdmin , isStaff , isEmployee } = jwt.verify(token, "vaishnavi@1809");

    if(isAdmin){
      return res.json({ id,isAdmin , msg: "true", status: "true" });
    }else if(isStaff){
      return res.json({ id, isStaff , msg: "true", status: "true" });
    }else {
      return res.json({ id, isEmployee , msg: "true", status: "true" });
    }
  } catch (error) {
    return res.json({ msg: error.message, status: "false" });
  }
};


// Logout Route http://localhost:8000/api/auth/deleteUser/:id
export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.isStaff || req.isEmployee) {
    return next(createError(403, "Staff && Employee can't delete user"));
  }

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};

// Logout Route http://localhost:8000/api/auth/getUser
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  const { password, ...info } = user._doc;
  res.status(200).send(info);
};
