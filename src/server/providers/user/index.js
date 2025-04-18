import * as creatuser from "./CreatUser.js";
import * as buscarusuario from "./BuscarUser.js";
import * as loginuser from "./Login.js";
import * as buscaruserid from "./BuscarUserId.js";
import * as deletauser from "./DeletaUser.js";

export const UserProvider = {
  ...creatuser,
  ...buscarusuario,
  ...loginuser,
  ...buscaruserid,
  ...deletauser,
};
