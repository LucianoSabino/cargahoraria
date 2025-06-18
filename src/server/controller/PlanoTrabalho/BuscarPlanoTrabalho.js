import { StatusCodes } from "http-status-codes";
import { PlanoTrabalhoProvider } from "../../providers/PlanoTrabalho/index.js";

export const buscarPlanoTrabalho = async (req, res) => {
  try {
    const result = await PlanoTrabalhoProvider.buscarPlanoTrabalho(
      req.params.id
    );
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
