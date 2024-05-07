const ctrl = {}
const model = require("../model/employee")
const modelEdu = require("../model/education")
const modelFam = require("../model/family")
const modelProfile = require("../model/profile")
const response = require("../utils/response")
const moment = require("moment")

ctrl.fetchData = async (req, res) => {
  try {
    const result = await model.getAllData()
    if (!result.length) {
      return response(res, 404, "Data tidak ditemukan")
    } else {
      return response(res, 200, result)
    }
  } catch (error) {
    return response(res, 500, error.message)
  }
}

ctrl.getAllDetail = async (req, res) => {
  try {
    const result = await model.getAllDetailEmployee()
    if (!result.length) {
      return response(res, 404, "Data tidak ditemukan")
    } else {
      return response(res, 200, result)
    }
  } catch (error) {
    return response(res, 500, error.message)
  }
}

ctrl.detailEmployee = async (req, res) => {
  try {
    const result = await model.getDetailEmployee(req.params.id)
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
      nik: req.body.nik,
      name: req.body.name,
      start_date: moment(req.body.start_date, "YYYY-MM-DD"),
      end_date: moment(req.body.end_date, "YYYY-MM-DD"),
    }
    const result = await model.saveData(reqData)
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error.message)
  }
}

ctrl.saveAll = async (req, res) => {
  try {
    const reqData = {
      nik: req.body.nik,
      name: req.body.name,
      start_date: moment(req.body.start_date, "YYYY-MM-DD"),
      end_date: moment(req.body.end_date, "YYYY-MM-DD"),
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
      nik: req.body.nik,
      name: req.body.name,
      start_date: moment(req.body.start_date, "YYYY-MM-DD"),
      end_date: moment(req.body.end_date, "YYYY-MM-DD"),
      updated_by: req.body.updated_by,
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
