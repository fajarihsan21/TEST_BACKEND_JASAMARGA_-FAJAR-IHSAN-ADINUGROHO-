const express = require("express")
const route = express.Router()

const employee = require("./employee")
const education = require("./education")
const family = require("./family")
const profile = require("./profile")

route.use("/employee", employee)
route.use("/education", education)
route.use("/family", family)
route.use("/profile", profile)

module.exports = route
