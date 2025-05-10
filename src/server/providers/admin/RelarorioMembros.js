import prisma from "../../database/prisma.js";

export const relatorioMembros = async () => {
  try {
    const horarios = await prisma.horario.findMany({
      select: {
        descricao: true,
        data: true,
        user: {
          select: {
            nome: true,
          },
        },
      },
    });

    const resultado = horarios.map((item) => ({
      nome: item.user.nome,
      data: item.data,
      descricao: item.descricao,
    }));

    return resultado;
  } catch (error) {
    throw new Error("Erro ao buscar relatório de membros: " + error.message);
  }
};
