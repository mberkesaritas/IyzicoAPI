const  express = require('express')
const paymentRouter = require('./router')
const cors = require('cors')

const app = express()
const port = 3000


app.use(cors())
app.use(express.json());

app.get('/api', (req,res) => res.json({message:"DramaQuuer Iyzico API"}));
app.use('/api/payment' , paymentRouter)

app.listen( process.env.PORT || port, () => console.log('Server is active'));


