// Gerar documento word

import prisma from "../../database/prisma.js";
import { Document, Packer, Paragraph, TextRun } from "docx";

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
                    text: "Relatório de todos os membros!",
                    bold: true,
                    size: 28,
                  }),
                ],
                spacing: { after: 300 },
              }),
              ...resultado.map(
                (item) =>
                  new Paragraph({
                    children: [
                      new TextRun({ text: `Nome: ${item.nome}`, bold: true }),
                      new TextRun({ text: `\nData: ${item.data}` }),
                      new TextRun({ text: `\nDescrição: ${item.descricao}` }),
                    ],
                    spacing: { after: 200 },
                  })
              ),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Documento gerado pelo sistema da RAS IEEE UFRB.",
                    italics: true,
                  }),
                ],
                spacing: { before: 400 },
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
