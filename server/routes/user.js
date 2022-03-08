import express from "express";

const router = express.Router();

import { signIn, signUp, updatePassword, updateUser, getUser } from "../controllers/user.js";

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/get", getUser)
router.patch("/update/:id", updateUser);
router.patch("/update/password/:id", updatePassword)

export default router;