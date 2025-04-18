import { StatusCodes } from "http-status-codes";
import { UserProvider } from "../../providers/user/index.js";

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const dado = req.body;
    const result = await UserProvider.updateUser(id, dado);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Erro ao atualizar dados!",
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
