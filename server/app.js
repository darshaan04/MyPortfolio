require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 6002
require("./db/conn")
const router = require("./Routes/router");



app.use(cors())
app.use(express.json());
app.use(router)
app.listen(port, ()=>{
    console.log("server started")
})
