import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './Routes/userRoute.js'
import TicketRoutes from './Routes/ticketRoutes.js'

const app = express()

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes)
app.use('/tickets', TicketRoutes)

const URL = 'mongodb://localhost:27017/TicketSystem'
const PORT = '8080'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})