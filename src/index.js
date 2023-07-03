import app from './app.js'
import { PORT } from './config.js'

app.listen(PORT)
console.log('Server on running on port', PORT)