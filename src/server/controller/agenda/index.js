import * as creatagenda from "./CreatAgenda.js";
import * as deletaagenda from "./DeletaAgenda.js";
import * as listeagenda from "./ListeAgenda.js";

export const AgendaController = {
  ...creatagenda,
  ...deletaagenda,
  ...listeagenda,
};
