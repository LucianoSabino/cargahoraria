import prisma from "../../database/prisma.js";

export const deletaUser = async (id) => {
  try {
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    return { message: "Usuário deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar usuário:", error.message);
    throw error;
  }
};
