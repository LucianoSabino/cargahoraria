import prisma from "../../database/prisma.js";

export const buscarHoraData = async (dataInicio, dataFim) => {
  try {
    const result = await prisma.horario.findMany({
      where: {
        data: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
    });

    if (!result) {
      throw new Error("Registro não encontrado");
    }

    return result;
  } catch (error) {
    throw new Error("Erro ao buscar horário por data");
  }
};
