import { CriptografiaSenha } from "../../shared/services/CriptografiaSenha";
import prisma from "../database/prisma.js";

export const creatUser = async (data) => {
  try {
    const criptografiaSenha = await CriptografiaSenha.gerandoSenha(data.senha);
    data.senha = criptografiaSenha;
    const result = await prisma.user.create({
      data,
    });
    const { senha, ...dados } = result;
    return dados;
  } catch (error) {
    throw new Error("Erro ao criar usuário");
  }
};
