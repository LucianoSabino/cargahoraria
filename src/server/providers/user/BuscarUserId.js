import prisma from "../../database/prisma.js";

export const buscaUserId = async ({ id }) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!result) {
      throw new Error("Usuário não encontrado");
    }

    const { password, ...restoDados } = result;
    return restoDados;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
    throw error;
  }
};
