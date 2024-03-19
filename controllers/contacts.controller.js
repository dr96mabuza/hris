const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await prisma.contacts.findMany();
    return res.json({ status: "ok", result: contacts });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createContact = async (req, res, next) => {
  try {
    const contact = await prisma.contacts.create({
      data: {
        email: req.body.email,
        cellphoneNumber: req.body.cellphoneNumber,
        companyEmail: req.body.companyEmail,
        alternateNumber: req.body.alternateNumber,
        employeeId: req.body.employeeId,
      },
    });
    return res.json({ status: "ok", result: contact });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getContact = async (req, res, next) => {
  try {
    const contact = await prisma.contacts.findFirst({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: contact });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const contact = await prisma.contacts.update({
      where: { id: Number(req.params.id) },
      data: {
        email: req.body.email,
        cellphoneNumber: req.body.cellphoneNumber,
        companyEmail: req.body.companyEmail,
        alternateNumber: req.body.alternateNumber,
      },
    });
    return res.json({ status: "ok", result: contact });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await prisma.contacts.delete({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: contact });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
