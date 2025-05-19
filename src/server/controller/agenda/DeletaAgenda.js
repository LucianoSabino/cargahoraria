import { StatusCodes } from "http-status-codes";
import { AgendaProvider } from "../../providers/agenda/index.js";

export const deletaAgenda = async (req, res) => {
  try {
    const result = await AgendaProvider.deletaAgenda(req.params.id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Agenda não encontrada",
      });
    }
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
