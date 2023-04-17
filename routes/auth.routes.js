import express from "express";
import { register, login, logout,deleteUser,getUser, verify } from "../controller/auth/auth.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/verify", verify)
router.delete("/deleteUser/:id", verifyToken, deleteUser);
router.get("/getUser/:id", getUser);

export default router;
