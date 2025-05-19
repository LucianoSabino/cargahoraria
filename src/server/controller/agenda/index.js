import * as creatagenda from "./CreatAgenda.js";
import * as deletaagenda from "./DeletaAgenda.js";
import * as listeagenda from "./ListeAgenda.js";
import * as updateagenda from "./UpdateAgenda.js";

export const AgendaController = {
  ...creatagenda,
  ...deletaagenda,
  ...listeagenda,
  ...updateagenda,
};
