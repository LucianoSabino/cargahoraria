import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

export const creatHorasValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object({
      horas: yup.string().required("Horas é obrigatório"),
      horario: yup.string().required("Horário é obrigatório"),
      descricao: yup.string().required("Descrição é obrigatório"),
      userId: yup.string().required("UserId é obrigatório"),
    })
  ),
}));

export const creatHoras = async (req, res) => {
  try {
    const result = await HorasProvider.creatHoras(req.body);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
