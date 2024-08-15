import express from "express";
import { createUser, getAllUsers, getUserById, loginUser } from "../controllers/user.controller";
import { verify } from "../middleware/protect.middleware";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/login", loginUser);

router.post("/register", createUser);

router.get("/", verify, getUserById);

export default router;
