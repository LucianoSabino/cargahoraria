import { UserProvider } from "../../providers/user/index.js";
import { StatusCodes } from "http-status-codes";

export const buscaUserId = async (req, res) => {
  try {
    const result = await UserProvider.buscaUserId(req.params);
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};
