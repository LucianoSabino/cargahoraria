import * as creatplanotrabalho from "./CreatPlanoTrabalho.js";
import * as updateplanotrabalho from "./UpdatePlanoTrabalho.js";
import * as buscarplanotrabalho from "./BuscarPlanoTrabalho.js";
import * as deletaplanotrabalho from "./DeletePlanoTrabalho.js";

export const PlanoTrabalhoController = {
  ...creatplanotrabalho,
  ...updateplanotrabalho,
  ...buscarplanotrabalho,
  ...deletaplanotrabalho,
};
