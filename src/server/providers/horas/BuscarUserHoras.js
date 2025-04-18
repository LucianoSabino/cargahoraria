import prisma from "../../database/prisma.js";

export const buscarUserHora = async (id) => {
  try {
    const result = await prisma.horario.findMany({
      where: {
        userI: Number(id),
      },
    });
    return result;
  } catch (error) {
    throw new Error("Erro ao buscar horário por usuário");
  }
};
