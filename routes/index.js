var express = require("express");
var router = express.Router();
const mysql = require("mysql2");
const connection = require("../database");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")


/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const employee = await prisma.employees.findMany();
    return res.json({ status: "ok", result: employee });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const employee = await prisma.employees.findFirst({
      where: { username: req.body.username },
    });
    const match = await bcrypt.compare(req.body.password, employee.passwordSalt);
    if (match) {
      const token = jwt.sign({ employee: employee }, 'shhhhh');
      return res.json({ status: "ok", result: {"token": token} });
    }
    return res.json({ status: "error", result: "user not found" });
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const employee = await prisma.employees.update({
      where: { id: (await prisma.employees.findFirst({
        where: {username: req.body.username}
      })).id },
      data: {
        passwordSalt: await bcrypt.hash(req.body.passwordConfirm, 10),
      }
    });
    return res.json({ status: "ok", result: employee });
    
  } catch (error) {
    return res.json({ status: "error", result: error });
  }
});

router.post("/search", (req, res) => {
  connection.query(
    `select * from employees where firstName like '%${req.body.search}%' or lastName like '%${req.body.search}%'`,
    (error, results) => {
      if (error) {
        res.json({ status: "error", result: error });
      }
      res.json({ status: "ok", result: results });
    },
  );
});

module.exports = router;
