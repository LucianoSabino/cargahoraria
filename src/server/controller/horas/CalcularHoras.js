import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

export const calcularHora = async (req, res) => {
  try {
    const { userId, dataInicio, dataFim } = req.query;
    console.log("ID:", id);
    const result = await HorasProvider.CalculatHoras(
      userId,
      dataInicio,
      dataFim
    );
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
