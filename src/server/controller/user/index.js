import * as creatuser from "./CreatUser.js";
import * as buscarusuario from "./BuscarUser.js";
import * as loginuser from "./Login.js";

export const UserController = {
  ...creatuser,
  ...buscarusuario,
  ...loginuser,
};
