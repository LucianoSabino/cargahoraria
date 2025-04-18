import { StatusCodes } from "http-status-codes";
import { UserProvider } from "../../providers/user/index.js";

export const deletaUser = async (req, res) => {
  try {
    const result = await UserProvider.deletaUser(req.params.id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Usuário não encontrado",
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
