import prisma from "../../database/prisma.js";

export const CalculatHoras = async (id, dataInicio, dataFim) => {
  try {
    const where = {
      userId: Number(id),
    };

    if (dataInicio && dataFim) {
      where.data = {
        gte: new Date(dataInicio),
        lte: new Date(dataFim),
      };
    }

    const result = await prisma.horario.aggregate({
      _sum: {
        horas: true,
      },
      where,
    });

    if (result._sum.horas != null) {
      return result._sum.horas;
    }

    return new Error("Registro não encontrado!");
  } catch (error) {
    console.error("Erro Prisma:", error);
    return new Error("Erro ao consultar o registro");
  }
};
