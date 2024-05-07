const express = require("express")
const route = express.Router()
const ctrl = require("../controller/profile")

route.get("/", ctrl.fetchData)
route.post("/", ctrl.save)
route.put("/:id", ctrl.update)
route.delete("/:id", ctrl.delete)

module.exports = route
