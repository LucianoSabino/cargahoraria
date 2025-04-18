import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

export const creatHoraData = async (req, res) => {
  try {
    const { dataInicio, dataFim } = req.query;
    const result = await HorasProvider.buscarHoraData(dataInicio, dataFim);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
