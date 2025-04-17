import prisma from "../../database/prisma.js";

export const buscarUser = async () => {
  try {
    const result = await prisma.user.findMany({
      select: {
        id: true,
        nome: true,
        matricula: true,
        membresia: true,
      },
    });
    return result;
  } catch (error) {
    throw new Error("Erro ao buscar usuário");
  }
};
