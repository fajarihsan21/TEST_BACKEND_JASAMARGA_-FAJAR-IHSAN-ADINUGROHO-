const db = require("../config/db")
const escape = require("pg-format")
const model = {}

model.getAllData = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM public.employee where is_active = true ORDER BY id DESC"
    )
      .then((res) => {
        if (res.rows.length <= 0) {
          resolve("data not found")
        } else {
          resolve(res.rows)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.getDataById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM public.employee WHERE id=$1;", [id])
      .then((res) => {
        resolve(res.rows)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.getDetailEmployee = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT e.id as employee_id, e.nik, e.name, e.is_active, ep."gender", EXTRACT(YEAR FROM age(ep.date_of_birth)) AS age, ed.name as school_name, ed.level, ef.family_data FROM public.employee e
    left join public.employee_profile ep on ep.employee_id = e.id
    left join public.education ed on ed.employee_id = e.id
    left join (select employee_id, string_agg(concat(count, ' ', relation_status), ', ') AS family_data from (
    select employee_id, relation_status, count(*) as count from employee_family group by employee_id, relation_status) as counts
            group by employee_id) as ef on ef.employee_id = e.id
    where e.is_active = true and e.id = $1 order by e.id desc`,
      [id]
    )
      .then((res) => {
        resolve(res.rows)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.getAllDetailEmployee = () => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT e.id as employee_id, e.nik, e.name, e.is_active, ep."gender", EXTRACT(YEAR FROM age(ep.date_of_birth)) AS age, ed.name as school_name, ed.level, ef.family_data FROM public.employee e
    left join public.employee_profile ep on ep.employee_id = e.id
    left join public.education ed on ed.employee_id = e.id
    left join (select employee_id, string_agg(concat(count, ' ', relation_status), ', ') AS family_data from (
    select employee_id, relation_status, count(*) as count from employee_family group by employee_id, relation_status) as counts
            group by employee_id) as ef on ef.employee_id = e.id
    where e.is_active = true order by e.id desc`
    )
      .then((res) => {
        resolve(res.rows)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.saveData = ({ nik, name, start_date, end_date }) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO public.employee
            (nik, name, is_active, start_date, end_date, created_by, updated_by, created_at, updated_at)
            VALUES($1, $2, true, $3, $4, 'admin', 'admin', now(), now());            
        `,
      [nik, name, start_date, end_date]
    )
      .then((res) => {
        resolve(`${res.rowCount} employee data saved`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

model.updateData = ({ nik, name, start_date, end_date, updated_by, id }) => {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE public.employee SET
            nik = $1,
            name =$2,
            start_date = $3,
            end_date = $4,
            updated_by = $5,
            updated_at = now()
            WHERE id = $6       
        `,
      [nik, name, start_date, end_date, updated_by, id]
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
    db.query(`DELETE FROM public.employee WHERE id = $1`, [id])
      .then((res) => {
        resolve(`${res.rowCount} user deleted`)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = model
