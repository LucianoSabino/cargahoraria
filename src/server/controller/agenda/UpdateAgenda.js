import { StatusCodes } from "http-status-codes";
import { AgendaProvider } from "../../providers/agenda/index";

export const updateAgenda = async (req, res) => {
  try {
    const id = req.params.id;
    const dado = req.body;
    const result = await AgendaProvider.updateAgenda(id, dado);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Erro ao atualizar dados!",
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
