const express = require("express")
const app = express()
const routers = require("./src/router")
const db = require("./src/config/db")

const PORT = 8000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(routers)

db.connect()
  .then(() => {
    console.log("Database Connected!")
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((e) => {
    console.log(e)
  })
