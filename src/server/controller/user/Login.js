import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { UserProvider } from "../../providers/user/index.js";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../../shared/services/JWT.js";

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

    if (!result) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        errors: {
          default: "Usuário ou senha inválidos",
        },
      });
      return;
    }

    const accessToken = JWTService.sign({
      uid: result.id,
      nome: result.nome,
      matricula: result.matricula,
      role: result.role,
    });

    if (accessToken === "JWT_SECRET_NOT_FOUND") {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: "Erro ao gerar o Token de acesso!",
        },
      });
      return;
    }

    res.status(StatusCodes.OK).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
