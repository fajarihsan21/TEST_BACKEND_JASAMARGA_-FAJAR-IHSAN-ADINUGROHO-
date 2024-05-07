const db = require("../config/db")
const model = {}

model.getAllFamily = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM public.employee_family ORDER BY id DESC")
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
    db.query("SELECT * FROM public.employee_family WHERE id=$1;", [id])
      .then((res) => {
        resolve(res.rows)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.saveData = ({
  employee_id,
  name,
  identifier,
  job,
  place_of_birth,
  date_of_birth,
  religion,
  relation_status,
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO public.employee_family
            (employee_id, "name", identifier, job, place_of_birth, date_of_birth, "religion", is_life, is_divorced, relation_status, created_by, updated_by, created_at, updated_at)
            VALUES($1, $2, $3, $4, $5, $6, $7, true, false, $8, 'admin', 'admin', now(), now());            
        `,
      [
        employee_id,
        name,
        identifier,
        job,
        place_of_birth,
        date_of_birth,
        religion,
        relation_status,
      ]
    )
      .then((res) => {
        resolve(`${res.rowCount} education data saved`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.updateData = ({
  employee_id,
  name,
  identifier,
  job,
  place_of_birth,
  date_of_birth,
  religion,
  is_life,
  is_divorced,
  relation_status,
  id,
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE public.employee_family SET
      employee_id=$1, "name"=$2, identifier=$3, job=$4, place_of_birth=$5, date_of_birth=$6, "religion"=$7, is_life=$8, is_divorced=$9, relation_status=$10,
            updated_by = 'admin',
            updated_at = now()
            WHERE id = $11       
        `,
      [
        employee_id,
        name,
        identifier,
        job,
        place_of_birth,
        date_of_birth,
        religion,
        is_life,
        is_divorced,
        relation_status,
        id,
      ]
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
    db.query(`DELETE FROM public.employee_family WHERE id = $1`, [id])
      .then((res) => {
        resolve(`${res.rowCount} user deleted`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = model
