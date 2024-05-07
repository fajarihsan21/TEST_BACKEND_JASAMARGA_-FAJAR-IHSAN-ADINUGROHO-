const ctrl = {}
const model = require("../model/family")
const response = require("../utils/response")
const moment = require("moment")

ctrl.fetchData = async (req, res) => {
  try {
    const result = await model.getAllFamily()
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
      identifier: req.body.identifier,
      job: req.body.job,
      place_of_birth: req.body.place_of_birth,
      date_of_birth: moment(req.body.date_of_birth, "YYYY-MM-DD"),
      religion: req.body.religion,
      relation_status: req.body.relation_status,
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
      identifier: req.body.identifier,
      job: req.body.job,
      place_of_birth: req.body.place_of_birth,
      date_of_birth: moment(req.body.date_of_birth, "YYYY-MM-DD"),
      religion: req.body.religion,
      relation_status: req.body.relation_status,
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
