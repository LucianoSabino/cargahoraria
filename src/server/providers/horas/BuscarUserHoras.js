import prisma from "../../database/prisma.js";

export const buscarUserHora = async (id) => {
  try {
    const result = await prisma.horario.findMany({
      where: {
        userId: Number(id),
      },
    });

    if (!result) {
      throw new Error("Registro não encontrado");
    }

    return result;
  } catch (error) {
    console.error("Erro ao buscar hora id", error);
    throw new Error("Erro ao buscar horário por usuário");
  }
};
