import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

export const buscarUserHora = async (req, res) => {
  try {
    const result = await HorasProvider.buscarUserHora(req.params.id);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
