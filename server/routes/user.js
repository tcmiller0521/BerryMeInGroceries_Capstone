import express from "express";
import { checkDuplicateEmail } from "../middleware/verifySignUp.js";

const router = express.Router();

import { signIn, signUp, updatePassword, updateUser, getUser } from "../controllers/user.js";

router.post("/signin", signIn);
router.post("/signup", checkDuplicateEmail, signUp);
router.post("/get", getUser)
router.patch("/update/:id", updateUser, checkDuplicateEmail);
router.patch("/update/password/:id", updatePassword)

export default router;