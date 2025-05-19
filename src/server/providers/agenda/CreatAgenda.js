import prisma from "../../database/prisma.js";

export const creatAgenda = async (data) => {
  try {
    const result = await prisma.agenda.create({
      data,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao criar agenda");
  }
};
