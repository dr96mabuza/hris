const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAddresses = async (req, res, next) => {
  try {
    const addresses = await prisma.addresses.findMany();
    return res.json({ status: "ok", result: addresses });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createAddress = async (req, res, next) => {
  try {
    const address = await prisma.addresses.create({
      data: {
        street: req.body.street,
        suburb: req.body.suburb,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        employeeId: req.body.employeeId,
      },
    });
    return res.json({ status: "ok", result: address });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getAddress = async (req, res, next) => {
  try {
    const address = await prisma.addresses.findFirst({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: address });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateAddress = async (req, res, next) => {
  try {
    const address = await prisma.addresses.update({
      where: { id: Number(req.params.id) },
      data: {
        street: req.body.street,
        suburb: req.body.suburb,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
      },
    });
    return res.json({ status: "ok", result: address });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteAddress = async (req, res, next) => {
  try {
    const address = await prisma.addresses.delete({
      where: { id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: address });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
