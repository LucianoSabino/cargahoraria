import * as creatAgenda from "./CreatAgenda.js";
import * as deletaAgenda from "./DeletaAgenda.js";
import * as listeAgenda from "./ListaAgenda.js";

export const AgendaProvider = {
  ...creatAgenda,
  ...deletaAgenda,
  ...listeAgenda,
};
