import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as fs from 'fs'
import * as Handlebars from 'handlebars'
import * as biformat from 'biguint-format'
import * as bigInt from 'big-integer'
import * as crypto from 'crypto'

const tplStr = fs.readFileSync(`${__dirname}/template.html`).toString()
const tpl = Handlebars.compile(tplStr);

function genNew() {
	const bytes1 = crypto.randomBytes(8)
	const num1 = biformat(bytes1, 'dec');
	const bint1 = bigInt(num1)
	const bytes2 = crypto.randomBytes(8)
	const num2 = biformat(bytes2, 'dec');
	const bint2 = bigInt(num2)
	const composite = bint1.multiply(bint2)
	return composite
}

const app = express()
const port = 3001

app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/', (req, res) => {
	let isOk = false
	let composite: bigInt.BigInteger
	while (!isOk) {
		composite = genNew()
		if (composite.isEven()) {
			// pass
		}
		else if (composite.toString()[composite.toString().length - 1] === '5') {
			// pass
		}
		else {
			isOk = true
		}
	}
	const data = { composite, compositeStr: composite.toString() }
	res.send(tpl(data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
