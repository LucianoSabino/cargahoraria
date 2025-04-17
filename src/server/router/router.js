import { Router } from "express";
import { UserController } from "../controller/user/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Api ponto ras funciomando com sucesso!");
});

// User

router.post(
  "/user",
  UserController.creatUserValidation,
  UserController.creatUser
);

export default router;
