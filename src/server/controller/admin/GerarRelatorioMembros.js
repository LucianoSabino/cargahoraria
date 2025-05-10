import { StatusCodes } from "http-status-codes";
import { AdminProvider } from "../../providers/admin/index.js";

export const GerarRelatorioMembros = async (req, res) => {
  try {
    const result = await AdminProvider.gerarRelatorioMembros();
    res.set({
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="RelatorioMembros.docx"',
      "Content-Length": result.length,
    });

    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error.message || "Erro interno no servidor",
    });
  }
};
