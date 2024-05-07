const ctrl = {}
const model = require("../model/profile")
const response = require("../utils/response")
const moment = require("moment")

ctrl.fetchData = async (req, res) => {
  try {
    const result = await model.getAllProfile()
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
      place_of_birth: req.body.place_of_birth,
      date_of_birth: moment(req.body.date_of_birth, "YYYY-MM-DD"),
      gender: req.body.gender,
      is_married: req.body.is_married,
      prof_pict: req.body.prof_pict,
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
      place_of_birth: req.body.place_of_birth,
      date_of_birth: moment(req.body.date_of_birth, "YYYY-MM-DD"),
      gender: req.body.gender,
      is_married: req.body.is_married,
      prof_pict: req.body.prof_pict,
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
