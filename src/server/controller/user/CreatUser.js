import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { UserProvider } from "../../providers/user/index.js";
import { StatusCodes } from "http-status-codes";

export const creatUserValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object({
      nome: yup.string().required("Nome é obrigatório"),
      matricula: yup
        .string()
        .required("Matrícula é obrigatória")
        .min(10)
        .max(10),
      membresia: yup.string().required("Membresia é obrigatória"),
      email: yup
        .string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      senha: yup.string().required("Senha é obrigatória"),
      telefone: yup.string().required("Telefone é obrigatório"),
      role: yup.string().required("Role é obrigatório"),
      sobre: yup.string().required("Sobre é obrigatório"),
      robo: yup.string().required("Robo é obrigatório"),
    })
  ),
}));

export const creatUser = async (req, res) => {
  try {
    const result = await UserProvider.creatUser(req.body);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error); // Ajuda a debugar
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
