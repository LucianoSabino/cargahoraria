import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

export const buscarHorasUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await HorasProvider.buscarUserHora(userId);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
