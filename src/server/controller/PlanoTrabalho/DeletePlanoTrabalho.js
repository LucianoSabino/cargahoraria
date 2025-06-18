import { StatusCodes } from "http-status-codes";
import { PlanoTrabalhoProvider } from "../../providers/PlanoTrabalho/index.js";

export const deletaPlanoTrabalho = async (req, res) => {
  try {
    const result = await PlanoTrabalhoProvider.deletaPlanoTrabalho(
      req.params.id
    );
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Plano de Trabalho não encontrado",
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
