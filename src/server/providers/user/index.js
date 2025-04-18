import * as creatuser from "./CreatUser.js";
import * as buscarusuario from "./BuscarUser.js";
import * as loginuser from "./Login.js";
import * as buscarusuarioid from "./BuscarUserId.js";

export const UserProvider = {
  ...creatuser,
  ...buscarusuario,
  ...loginuser,
  ...buscarusuarioid,
};
