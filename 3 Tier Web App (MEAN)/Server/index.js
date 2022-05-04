import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './Routes/userRoute.js'
import TicketRoutes from './Routes/ticketRoutes.js'
import 'dotenv/config'

const app = express()

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes)
app.use('/tickets', TicketRoutes)


const uri = process.env.ATLAS_URI
const port = process.env.PORT

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    app.listen(port, () => console.log(`Server is running on PORT: ${port}`))
}).catch((error) => {
    console.log('Error:', error.message)
})