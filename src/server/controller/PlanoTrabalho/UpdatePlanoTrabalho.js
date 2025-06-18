import { StatusCodes } from "http-status-codes";
import { PlanoTrabalhoProvider } from "../../providers/PlanoTrabalho/index.js";

export const updatePlanoTrabalho = async (req, res) => {
  try {
    const id = req.params.id;
    const dado = req.body;
    const result = await PlanoTrabalhoProvider.updatePlhanoTrabalho(id, dado);
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
