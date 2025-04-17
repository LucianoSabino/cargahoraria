import { StatusCodes } from "http-status-codes";
import { UserProvider } from "../../providers/user/index.js";

export const buscarUser = async (req, res) => {
  try {
    const result = await UserProvider.buscarUser();
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
