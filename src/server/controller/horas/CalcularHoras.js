import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

export const calcularHora = async (req, res) => {
  try {
    const { id, dataInicio, dataFim } = req.query;
    const result = await HorasProvider.CalculatHoras(id, dataInicio, dataFim);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
