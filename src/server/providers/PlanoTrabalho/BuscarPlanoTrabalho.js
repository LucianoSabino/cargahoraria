import prisma from "../../database/prisma.js";

export const buscarPlanoTrabalho = async ({ id }) => {
  try {
    const result = await prisma.planotrabalho.findUnique({
      where: {
        userId: Number(id),
      },
    });

    if (!result) {
      throw new Error("Plano de Trabalho não encontrado");
    }

    return result;
  } catch (error) {
    console.error("Erro ao buscar plano de trabalho:", error.message);
    throw error;
  }
};
