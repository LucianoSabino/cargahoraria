import * as creathoras from "./Creathoras.js";
import * as buscarhoradata from "./BuscarHoraData.js";
import * as buscaruserhoras from "./BuscarUserHoras.js";

export const HorasController = {
  ...creathoras,
  ...buscarhoradata,
  ...buscaruserhoras,
};
