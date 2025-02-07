import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import NotFound from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import numberRoutes from './routes/number.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// routes middleware
app.use('/api', numberRoutes)

// error middleware
app.use(NotFound)
app.use(errorHandlerMiddleware)

// starting server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server listening on port ${port}...`)
})
