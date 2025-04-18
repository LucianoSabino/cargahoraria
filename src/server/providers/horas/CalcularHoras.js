import prisma from "../../database/prisma.js";

export const CalculatHoras = async (id, dataInicio, dataFim) => {
  try {
    // Cria o filtro base para o userId
    const where = {
      AND: [
        {
          userId: Number(id), // Filtro para o userId
        },
        // Adiciona o filtro de data apenas se dataInicio e dataFim forem fornecidos
        dataInicio && dataFim
          ? {
              data: {
                gte: new Date(dataInicio),
                lte: new Date(dataFim),
              },
            }
          : {},
      ],
    };

    // Realiza a agregação para somar as horas com base no filtro
    const result = await prisma.horario.aggregate({
      _sum: {
        horas: true,
      },
      where,
    });

    // Retorna o resultado se houver soma de horas, caso contrário, retorna um erro
    if (result._sum.horas != null) {
      return result._sum.horas;
    }

    return new Error("Registro não encontrado!");
  } catch (error) {
    console.error("Erro Prisma:", error);
    return new Error("Erro ao consultar o registro");
  }
};
