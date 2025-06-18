import prisma from "../../database/prisma.js";

export const updatePlhanoTrabalho = async (id, data) => {
  try {
    const result = await prisma.planotrabalho.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return result;
  } catch (error) {
    console.error("Erro ao atualizar dados do plano de trabalho:", error);
    throw error;
  }
};
