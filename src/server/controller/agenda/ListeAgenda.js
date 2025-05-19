import { StatusCodes } from "http-status-codes";
import { AgendaProvider } from "../../providers/agenda/index.js";

export const listeAgenda = async (req, res) => {
  try {
    const result = await AgendaProvider.listaAgenda();
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
