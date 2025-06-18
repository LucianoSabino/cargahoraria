import prisma from "../../database/prisma.js";

export const deletaPlanoTrabalho = async (id) => {
  try {
    await prisma.planotrabalho.delete({
      where: {
        id: Number(id),
      },
    });
    return { message: "Plano de trabalho deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar plano de trabalho:", error.message);
    throw error;
  }
};
