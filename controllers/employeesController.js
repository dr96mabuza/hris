const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const date = require("../helpers/dateHelper");
const dateFormarter = date.date();

function generateUsername(name, surname) {
  if (name.length > 1 && surname.length > 2) {
    return `${name.slice(0, 2)}${surname.slice(0, 3)}${new Date().getFullYear()}`;
  }
  return `${name}${surname}${new Date().getFullYear()}`;
}

exports.getEmployees = async (req, res, next) => {
  try {
    const employee = await prisma.employees.findMany();
    return res.json({ status: "ok", result: employee });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await prisma.employees.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idNumber: req.body.idNumber,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        passwordSalt: "",
        username: generateUsername(
          req.body.firstName.toLowerCase(),
          req.body.lastName.toLowerCase(),
        ),
      },
    });
    return res.json({ status: "ok", result: employee });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await prisma.employees.findFirst({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: employee });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await prisma.employees.update({
      where: { id: Number(req.params.id) },
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idNumber: req.body.idNumber,
        gender: req.body.gender,
        dateOfBirth: dateFormarter.dateToISO(req.body.dateOfBirth),
      },
    });
    return res.json({ status: "ok", result: employee });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await prisma.employees.delete({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: employee });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
