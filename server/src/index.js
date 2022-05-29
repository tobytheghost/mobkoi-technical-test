import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.use('/api', routes)

app.listen(PORT, () => {
  console.log('Server started listening on port: ', PORT)
})

