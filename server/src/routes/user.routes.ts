import express from "express";
import { createUser, getAllUsers, loginUser } from "../controllers/user.controller";
import { verify } from "../middleware/protect.middleware";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/login", loginUser);

router.post("/register", createUser);

router.get("/", verify, getAllUsers);

export default router;
