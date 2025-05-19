import * as creatAgenda from "./CreatAgenda.js";
import * as deletaAgenda from "./DeletaAgenda.js";
import * as listeAgenda from "./ListaAgenda.js";
import * as updateAgenda from "./UpdateAgenda.js";

export const AgendaProvider = {
  ...creatAgenda,
  ...deletaAgenda,
  ...listeAgenda,
  ...updateAgenda,
};
