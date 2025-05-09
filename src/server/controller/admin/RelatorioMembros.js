import { StatusCodes } from "http-status-codes";
import { AdminProvider } from "../../providers/admin/index.js";

export const relatorioMembros = async (req, res) => {
  try {
    const result = await AdminProvider.relatorioMembros();
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
