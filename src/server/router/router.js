import { Router } from "express";
import { UserProvider } from "../controller/user/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Api ponto ras funciomando com sucesso!");
});

// User

router.post("/user", UserProvider.creatUserValidation, UserProvider.creatUser);

export default router;
