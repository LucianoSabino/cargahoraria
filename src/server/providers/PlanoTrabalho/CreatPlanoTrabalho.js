import prisma from "../../database/prisma.js";

export const creatPlanoTrabalho = async (data) => {
  try {
    const result = await prisma.planotrabalho.create({
      data,
    });
    return result;
  } catch (error) {
    throw new Error("Erro ao cadastrar plano de trabalho");
  }
};
