const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getDocuments = async (req, res, next) => {
  try {
    const documents = await prisma.documents.findMany();
    return res.json({ status: "ok", result: documents });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createDocument = async (req, res, next) => {
  try {
    const getDocumentName = req.body.document.split("\\").pop();
    const converted = new Uint8Array(req.body.document);
    const document = await prisma.documents.create({
      data: {
        documentName: getDocumentName,
        document: converted.toString(),
        type: req.body.documentName,
        employeeId: req.body.employeeId,
      },
    });
    return res.json({ status: "ok", result: document });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getDocument = async (req, res, next) => {
  try {
    const document = await prisma.documents.findFirst({
      where: { id: Number(req.params.id) },
    });
    if (document != null) {
      for (key in document) {
        if (key === "document") {
          document[key] = new Uint8Array(
            new ArrayBuffer(
              document[key].split(",").map((item) => Number(item)).length,
            ),
          );
        }
      }
    }
    return res.json({ status: "ok", result: document });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateDocument = async (req, res, next) => {
  try {
    const document = await prisma.documents.update({
      where: { id: Number(req.params.id) },
      data: {
        documentName: req.body.documentName,
        document: new Uint8Array(req.body.document).toString(),
      },
    });
    return res.json({ status: "ok", result: document });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteDocument = async (req, res, next) => {
  try {
    const document = await prisma.documents.delete({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: document });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
