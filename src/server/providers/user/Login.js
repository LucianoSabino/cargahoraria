import { CriptografiaSenha } from "../../shared/services/CriptografiaSenha.js";
import prisma from "../../database/prisma.js";

export const loginUser = async (data) => {
  try {
    const { matricula, senha } = data;

    const result = await prisma.user.findUnique({
      where: {
        matricula: matricula,
      },
    });
    if (!result) {
      throw new Error("Usuário não encontrado");
    }
    const senhaValida = await CriptografiaSenha.verificandoSenha(
      senha,
      result.senha
    );
    if (!senhaValida) {
      throw new Error("Senha inválida");
    }
    const { senha: _, ...dados } = result;

    return dados;
  } catch (error) {
    throw new Error("Erro ao fazer login");
  }
};
