import prisma from "../../database/prisma.js";

export const buscarHoraData = async (id, dataInicio, dataFim) => {
  try {
    const result = await prisma.horario.aggregate({
      _sum: {
        horas: true,
      },
      where: {
        userId: Number(id),
        data: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
    });

    if (!result) {
      throw new Error("Registro não encontrado");
    }
    // const horas = result._sum.horas || 0;
    return result;
  } catch (error) {
    throw new Error("Erro ao buscar horário por data");
  }
};
