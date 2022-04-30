import express from 'express'
const router = express.Router();

import { addTicket, getTickets, editTicket, deleteTicket } from '../Controller/ticketController.js';


router.post('/addTicket', addTicket)
router.get('/getTickets', getTickets)
router.post('/editTicket', editTicket)
router.delete('/:id', deleteTicket)

export default router