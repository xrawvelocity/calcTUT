const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req,res) => {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send(`The result of the calculation is ${result}`)
})

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req,res) => {
    let weight = Number(req.body.weight) * 703
    let feet = Number(req.body.feet) * 12
    let inches = Number(req.body.inches)
    let height = (feet + inches) * (feet + inches)
    let bmi = weight / height
    res.send(`Your bmi is ${bmi}`)
})

app.listen(3000, () => console.log('Server running on port 3000'))