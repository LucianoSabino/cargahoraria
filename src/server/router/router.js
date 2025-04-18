import { Router } from "express";
import { UserController } from "../controller/user/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Api ponto Ras IEEE, funciomando com sucesso!");
});

// User

// Criar usuario
router.post(
  "/user",
  UserController.creatUserValidation,
  UserController.creatUser
);

// Buscar usuario
router.get("/user", UserController.buscarUser);

// Login usuario
router.post(
  "/user/login",
  UserController.loginUserValidation,
  UserController.loginUser
);
export default router;
