import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { UserProvider } from "../../providers/user/index.js";
import { StatusCodes } from "http-status-codes";

export const loginUserValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object({
      matricula: yup
        .string()
        .required("Matrícula é obrigatória")
        .min(10)
        .max(10),
      senha: yup.string().required("Senha é obrigatória"),
    })
  ),
}));

export const loginUser = async (req, res) => {
  try {
    const result = await UserProvider.loginUser(req.body);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
