const ctrl = {}
const model = require("../model/education")
const response = require("../utils/response")

ctrl.fetchData = async (req, res) => {
  try {
    const result = await model.getAllEducation()
    if (!result.length) {
      return response(res, 404, "Data tidak ditemukan")
    } else {
      return response(res, 200, result)
    }
  } catch (error) {
    return response(res, 500, error.message)
  }
}

ctrl.save = async (req, res) => {
  try {
    const reqData = {
      employee_id: req.body.employee_id,
      name: req.body.name,
      level: req.body.level,
      description: req.body.description,
    }
    const result = await model.saveData(reqData)
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error.message)
  }
}

ctrl.update = async (req, res) => {
  try {
    const reqData = {
      employee_id: req.body.employee_id,
      name: req.body.name,
      level: req.body.level,
      description: req.body.description,
      id: req.params.id,
    }
    const data = await model.getDataById(req.params.id)
    if (data.length <= 0) {
      return response(res, 404, "Data not found")
    }
    const result = await model.updateData(reqData)
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error.message)
  }
}

ctrl.delete = async (req, res) => {
  try {
    const data = await model.getDataById(req.params.id)
    if (data.length <= 0) {
      return response(res, 404, "Data not found")
    }
    const result = await model.deleteData(req.params.id)
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error.message)
  }
}

module.exports = ctrl
