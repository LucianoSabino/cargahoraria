import prisma from "../../database/prisma.js";

export const creatHoras = async (data) => {
  try {
    const result = await prisma.horario.create({
      data,
    });
    return result;
  } catch (error) {
    throw new Error("Erro ao cadastrar horário");
  }
};
