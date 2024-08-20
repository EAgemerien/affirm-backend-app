import dotenv from 'dotenv'
import express from 'express'
import ip from 'ip'
import affirmRouter from './routes/affirm.route.js'
import { connectToDatabase } from './config/mysql.config.js'


dotenv.config({
    path: `${process.cwd()}/.env`
})
const PORT = process.env.SERVER_PORT
const app = express()

app.use(express.json())

app.use("/api/v1/affirm", affirmRouter)

app.use('*', (req, res) => {
    res.status(404).send({message: "route not found"})
})

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Up and running on ${ip.address()}:${PORT}`)
    })
}).catch( (err) => {
    console.log('Error occured. ERROR ', err)
    process.exit(0);
})

