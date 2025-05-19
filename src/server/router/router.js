import { Router } from "express";
import { UserController } from "../controller/user/index.js";
import { HorasController } from "../controller/horas/index.js";
import { AdminController } from "../controller/admin/index.js";
import { AgendaController } from "../controller/agenda/index.js";

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
router.get("/horas/data", HorasController.buscarHoraData);

// Buscar horas por id usuario
router.get("/horas/user/:id", HorasController.buscarUserHora);

// Calcular horas
router.get("/horas/calcular", HorasController.calcularHora);

// Adimin
// Relatorio de membros
router.get("/admin/relatorio/membros", AdminController.relatorioMembros);

// Relatorio
router.get("/admin/gerar/relatorio", AdminController.GerarRelatorioMembros);

// Agenda

// Cadastrar um evento
router.post(
  "/agenda/admin",
  AgendaController.creatAgendaValidation,
  AgendaController.creatAgenda
);

// Deletar um evento
router.delete("/agenda/admin/delete/:id", AgendaController.deletaAgenda);

// Lista todos os eventos
router.get("/lista/agenda", AgendaController.listeAgenda);

// Atualizar evento
router.put("/agenda/admin/update/:id", AgendaController.updateAgenda);

export default router;
