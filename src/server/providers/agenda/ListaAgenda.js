import prisma from "../../database/prisma.js";

export const listaAgenda = async () => {
  try {
    const result = await prisma.agenda.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao buscar eventos:", error.message);
    throw new Error("Erro ao buscar eventos");
  }
};
