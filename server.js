import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Success"
    })
})

app.listen(PORT, () => {
    console.log(`Server Up and running on Port: ${PORT}`)
})