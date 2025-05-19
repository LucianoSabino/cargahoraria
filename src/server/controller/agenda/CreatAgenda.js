import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { AgendaProvider } from "../../providers/agenda/index.js";
import { StatusCodes } from "http-status-codes";

export const creatAgendaValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object({
      nomeEvento: yup.string().required("Nome do evento é obrigatório"),
      horas: yup.string().required("Horas é obrigatório"),
      descricao: yup.string().required("Descrição é obrigatório"),
      data: yup.string().required("Data é obrigatório"),
    })
  ),
}));

export const creatAgenda = async (req, res) => {
  try {
    const result = await AgendaProvider.creatAgenda(req.body);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
