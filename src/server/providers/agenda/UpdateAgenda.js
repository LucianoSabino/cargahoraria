import prisma from "../../database/prisma.js";

export const updateAgenda = async (id, data) => {
  try {
    const result = await prisma.agenda.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return result;
  } catch (error) {
    console.error("Erro ao atualizar dados do evento:", error);
    throw error;
  }
};
