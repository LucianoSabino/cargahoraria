import { validation } from "../../shared/middlewares/index.js";
import * as yup from "yup";
import { HorasProvider } from "../../providers/horas/index.js";
import { StatusCodes } from "http-status-codes";

// export const creatHorasValidation = validation((getSchema) => ({
//   body: getSchema(
//     yup.object({
//       dataInicio: yup.string().required("Data de início é obrigatória"),
//       dataFim: yup.string().required("Data de fim é obrigatória"),
//     })
//   ),
// }));

export const creatHoraData = async (req, res) => {
  try {
    const { dataInicio, dataFim } = req.params;
    const result = await HorasProvider.buscarHoraData(dataInicio, dataFim);
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
