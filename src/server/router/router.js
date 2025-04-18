import { Router } from "express";
import { UserController } from "../controller/user/index.js";
import { HorasController } from "../controller/horas/index.js";

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
router.get("/users", UserController.buscarUser);

// Login usuario
router.post(
  "/user/login",
  UserController.loginUserValidation,
  UserController.loginUser
);

// Buscar usuario por id
router.get("/user/:id", UserController.buscaUserId);

// Deletar usuario
router.delete("/user/:id", UserController.deletaUser);

// Atualizar usuario
router.put("/user/:id", UserController.updateUser);

// Horas

// Cadastrar horas
router.post(
  "/horas",
  HorasController.creatHorasValidation,
  HorasController.creatHoras
);

// Buscar horas por data
router.get("/horas/data", HorasController.creatHoraData);

// Buscar horas por id usuario
router.get("/horas/user/:id", HorasController.buscarHorasUser);

export default router;
