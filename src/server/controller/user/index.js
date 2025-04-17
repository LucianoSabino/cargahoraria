import * as creatuser from "./CreatUser.js";
import * as buscarusuario from "./BuscarUser.js";

export const UserController = {
  ...creatuser,
  ...buscarusuario,
};
