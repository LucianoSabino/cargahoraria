import prisma from "../../database/prisma.js";

export const listaAgenda = async () => {
  try {
    const result = await prisma.agenda.findMany();
    return result;
  } catch (error) {
    throw new Error("Erro ao buscar eventos");
  }
};
