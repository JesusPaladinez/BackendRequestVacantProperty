const express = require("express");
const app = express()

const { body, validationResult } = require('express-validator')

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('Server up in http://localhost:3000');
})