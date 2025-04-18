import prisma from "../../database/prisma.js";

export const updateUser = async (id, data) => {
  try {
    const result = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data,
    });

    const { senha, ...restoDados } = result;
    return restoDados;
  } catch (error) {
    console.error("Erro ao atualizar dados do usuário:", error);
    throw error;
  }
};
