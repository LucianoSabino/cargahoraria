import * as creathoras from "./CreatHoras.js";
import * as buscarhoradata from "./BuscarHorasData.js";
import * as buscaruserhoras from "./BuscarUserHoras.js";

export const HorasProvider = {
  ...creathoras,
  ...buscarhoradata,
  ...buscaruserhoras,
};
