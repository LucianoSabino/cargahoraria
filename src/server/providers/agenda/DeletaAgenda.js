import prisma from "../../database/prisma.js";

export const deletaAgenda = async (id) => {
  try {
    await prisma.agenda.delete({
      where: {
        id: Number(id),
      },
    });
    return { message: "Evento deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar evento:", error.message);
    throw error;
  }
};
