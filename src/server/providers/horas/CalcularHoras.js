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

    return result._sum.horas; // Retorna a soma das horas
  } catch (error) {
    console.error("Erro ao calcular hora", error);
    throw new Error("Erro ao buscar horário por data");
  }
};
