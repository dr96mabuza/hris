const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProfile = async (req, res) => {
  try {
    const employeeId = Number(req.params.id);
    if (isNaN(employeeId)) {
      return res.json({ status: "error", result: "id not a number" });
    }
    const [
      addresses,
      compansations,
      contacts,
      documents,
      employeeDetails,
      leave,
    ] = await prisma.$transaction([
      prisma.addresses.findFirst({
        where: { employeeId: employeeId },
      }),
      prisma.compansation.findFirst({
        where: { employeeId: employeeId },
      }),
      prisma.contacts.findFirst({
        where: { employeeId: employeeId },
      }),
      prisma.documents.findFirst({
        where: { employeeId: employeeId },
      }),
      prisma.employmentDetails.findFirst({
        where: { employeeId: employeeId },
      }),
      prisma.leaves.findFirst({
        where: { employee_id: employeeId },
      }),
    ]);

    return res.json({
      status: "ok",
      result: {
        addresses,
        compansations,
        contacts,
        documents,
        employeeDetails,
        leave,
      },
    });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
};
