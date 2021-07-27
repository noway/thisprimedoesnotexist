import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

const app = express()
const port = 3001

app.use(cors())
app.use(morgan('dev'))
app.get('/', (req, res) => {
  res.send('Hello thisprimedoesnotexist!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
