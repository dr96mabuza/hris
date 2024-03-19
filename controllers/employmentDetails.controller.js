const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const date = require("../helpers/dateHelper");
const dateFormatter = date.date();

exports.getEmploymentDetails = async (req, res, next) => {
  try {
    const employmentDetail = await prisma.employmentDetails.findMany();
    return res.json({ status: "ok", result: employmentDetail });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createEmploymentDetail = async (req, res, next) => {
  try {
    const employmentDetail = await prisma.employmentDetails.create({
      data: {
        company: req.body.company,
        jobRole: req.body.jobRole,
        reportsTo: req.body.reportsTo,
        employmentStatus: req.body.employmentStatus,
        employeeId: req.body.employeeId,
        startDate: dateFormatter.dateToISO(req.body.startDate),
      },
    });
    return res.json({ status: "ok", result: employmentDetail });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getEmploymentDetail = async (req, res, next) => {
  try {
    const employmentDetail = await prisma.employmentDetails.findFirst({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: employmentDetail });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateEmploymentDetail = async (req, res, next) => {
  try {
    const employmentDetail = await prisma.employmentDetails.update({
      where: { id: Number(req.params.id) },
      data: {
        company: req.body.company,
        jobRole: req.body.jobRole,
        reportsTo: req.body.reportsTo,
        employmentStatus: req.body.employmentStatus,
      },
    });
    return res.json({ status: "ok", result: employmentDetail });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteEmploymentDetail = async (req, res, next) => {
  try {
    const employmentDetail = await prisma.employmentDetails.delete({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: employmentDetail });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
