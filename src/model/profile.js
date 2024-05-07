const db = require("../config/db")
const model = {}

model.getAllProfile = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM public.employee_profile ORDER BY id DESC")
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
    db.query("SELECT * FROM public.employee_profile WHERE id=$1;", [id])
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
  place_of_birth,
  date_of_birth,
  gender,
  is_married,
  prof_pict,
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO public.employee_profile
            (employee_id, place_of_birth, date_of_birth, "gender", is_married, prof_pict, created_by, updated_by, created_at, updated_at)
            VALUES($1, $2, $3, $4, $5, $6, 'admin', 'admin', now(), now());            
        `,
      [
        employee_id,
        place_of_birth,
        date_of_birth,
        gender,
        is_married,
        prof_pict,
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

// UPDATE public.employee_profile SET employee_id=0, place_of_birth='', date_of_birth='', "gender"='', is_married=false, prof_pict='', created_by='', updated_by='', created_at='', updated_at='' WHERE id=nextval('employee_profile_id_seq'::regclass);
model.updateData = ({
  employee_id,
  place_of_birth,
  date_of_birth,
  gender,
  is_married,
  prof_pict,
  id,
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE public.employee_profile SET
      employee_id=$1, place_of_birth=$2, date_of_birth='$3, "gender"=$4, is_married=$5, prof_pict=$6,
            updated_by = 'admin',
            updated_at = now()
            WHERE id = $7       
        `,
      [
        employee_id,
        place_of_birth,
        date_of_birth,
        gender,
        is_married,
        prof_pict,
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
    db.query(`DELETE FROM public.employee_profile WHERE id = $1`, [id])
      .then((res) => {
        resolve(`${res.rowCount} user deleted`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = model
