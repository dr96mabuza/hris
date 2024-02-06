const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getCompansations = async (req, res, next) => {
  try {
    const compansations = await prisma.compansation.findMany();
    return res.json({ status: "ok", result: compansations });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createCompansation = async (req, res, next) => {
  try {
    const compansation = await prisma.compansation.create({
      data: {
        salary: req.body.salary,
        deductions: req.body.deductions,
        bonus: req.body.bonus,
        employeeId: req.body.employeeId,
      },
    });
    return res.json({ status: "ok", result: compansation });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getCompansation = async (req, res, next) => {
  try {
    const compansation = await prisma.compansation.findFirst({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: compansation });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateCompansation = async (req, res, next) => {
  try {
    const compansation = await prisma.compansation.update({
      where: { id: Number(req.params.id) },
      data: {
        salary: req.body.salary,
        deductions: req.body.deductions,
        bonus: req.body.bonus,
      },
    });
    return res.json({ status: "ok", result: compansation });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteCompansation = async (req, res, next) => {
  try {
    const compansation = await prisma.compansation.delete({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: compansation });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
