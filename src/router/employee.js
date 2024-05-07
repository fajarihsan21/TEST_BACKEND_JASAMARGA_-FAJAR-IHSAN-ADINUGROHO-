const express = require("express")
const route = express.Router()
const ctrl = require("../controller/employee")

route.get("/", ctrl.fetchData)
route.get("/detail", ctrl.getAllDetail)
route.get("/:id", ctrl.detailEmployee)
route.post("/", ctrl.save)
route.put("/:id", ctrl.update)
route.delete("/:id", ctrl.delete)

module.exports = route
