const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const date = require("../helpers/dateHelper");
const dateFormatter = date.date();

exports.getLeaves = async (req, res, next) => {
  try {
    const leave = await prisma.leaves.findMany();
    return res.json({ status: "ok", result: leave });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.createLeave = async (req, res, next) => {
  try {
    const leave = await prisma.leaves.create({
      data: {
        leave_type: req.body.leave_type,
        reason: req.body.reason,
        start_date: dateFormatter.dateToISO(req.body.start_date),
        end_date: dateFormatter.dateToISO(req.body.end_date),
        days_absent: dateFormatter.getDaysDifference(
          req.body.start_date,
          req.body.end_date,
        ),
        employee_id: req.body.employeeId,
        approval: req.body.approval,
      },
    });
    return res.json({ status: "ok", result: leave });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.getLeave = async (req, res, next) => {
  try {
    const leave = await prisma.leaves.findFirst({
      where: { leave_id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: leave });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.updateLeave = async (req, res, next) => {
  try {
    const leave = await prisma.leaves.create({
      data: {
        leave_type: req.body.leave_type,
        reason: req.body.reason,
        start_date: dateFormatter.dateToISO(req.body.start_date),
        end_date: dateFormatter.dateToISO(req.body.end_date),
        days_absent: dateFormatter.getDaysDifference(
          req.body.start_date,
          req.body.end_date,
        ),
        approval: req.body.approval,
      },
    });
    return res.json({ status: "ok", result: leave });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};

exports.deleteLeave = async (req, res, next) => {
  try {
    const leave = await prisma.leaves.delete({
      where: { leave_id: Number(req.params.id) },
    });
    return res.json({ status: "ok", result: leave });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
