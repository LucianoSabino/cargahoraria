import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { PlanoTrabalhoProvider } from "../../providers/PlanoTrabalho/index.js";
import { StatusCodes } from "http-status-codes";

export const creatPlanoTrabalhoValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object({
      atividade: yup.string().required("Atividade é obrigatório"),
      descricao: yup.string().required("Descrição é obrigatório"),
      horas: yup.string().required("Horas é obrigatório"),
      data: yup.string().required("Data é obrigatório"),
      userId: yup.string().required("UserId é obrigatório"),
    })
  ),
}));

export const creatPlanoTrabalho = async (req, res) => {
  try {
    const result = await PlanoTrabalhoProvider.creatPlanoTrabalho(req.body);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
