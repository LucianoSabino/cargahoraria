// Gerar documento word

import prisma from "../../database/prisma.js";
const docx = require("docx");
const { Document, Packer, Paragraph, TextRun } = docx;

export const gerarRelatorioMembros = async () => {
  try {
    const horarios = await prisma.horario.findMany({
      select: {
        descricao: true,
        data: true,
        user: {
          select: {
            nome: true,
          },
        },
      },
    });

    const resultado = horarios.map((item) => ({
      nome: item.user.nome,
      data: item.data,
      descricao: item.descricao,
    }));

    const generateWordDocument = () => {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Relatorio de todos os menbros!.",
                    bold: true,
                  }),
                  new TextRun(
                    resultado
                      .map(
                        (item) =>
                          `\nNome: ${item.nome}\nData: ${item.data}\nDescrição: ${item.descricao}`
                      )
                      .join("\n")
                  ),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun(
                    "Documento gerado pelo sintema da RAS IEEE UFRB!."
                  ),
                ],
              }),
            ],
          },
        ],
      });

      return doc;
    };

    const doc = generateWordDocument();
    const buffer = await Packer.toBuffer(doc);

    return buffer;
  } catch (error) {
    throw new Error("Erro ao gerar documento word: " + error.message);
  }
};
