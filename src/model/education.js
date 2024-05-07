const db = require("../config/db")
const model = {}

model.getAllEducation = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM public.education ORDER BY id DESC")
      .then((res) => {
        resolve(res.rows)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.getDataById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM public.education WHERE id=$1;", [id])
      .then((res) => {
        resolve(res.rows)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.saveData = ({ employee_id, name, level, description }) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO public.education
            (employee_id, "name", "level", description, created_by, updated_by, created_at, updated_at)
            VALUES($1, $2, $3, $4, 'admin', 'admin', now(), now());            
        `,
      [employee_id, name, level, description]
    )
      .then((res) => {
        resolve(`${res.rowCount} education data saved`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.updateData = ({ employee_id, name, level, description, id }) => {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE public.employee SET
      employee_id = $1,
            name =$2,
            level = $3,
            description = $4,
            updated_by = 'admin',
            updated_at = now()
            WHERE id = $5       
        `,
      [employee_id, name, level, description, id]
    )
      .then((res) => {
        resolve(`${res.rowCount} data updated`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.deleteData = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM public.education WHERE id = $1`, [id])
      .then((res) => {
        resolve(`${res.rowCount} user deleted`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = model
