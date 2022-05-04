import Tickets from "../model/ticketModel.js";
import moment from 'moment'


export const addTicket = async (req, res) => {

    const { title, description, email } = req.body

    try {
        const date = moment().format("MMMM Do YYYY, h:mm:ss a")
        const newTicket = await Tickets.create({ ticket_id: email, ticket_sub: title, ticket_desc: description, created_at: date })

        res.status(201).json({ newTicket })
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getTickets = async (req, res) => {
    
    try {
        const tickets = await Tickets.find()
        res.status(200).json( tickets )
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editTicket = async (req, res) => {
    const { _id, title, description } = req.body
    
    const date = moment().format("MMMM Do YYYY, h:mm:ss a")

    Tickets.findByIdAndUpdate({_id: _id}, {ticket_sub: title, ticket_desc: description, updated_at: date}, {new:true}, (err, newTicket)=>{
        if(!err){
            res.json({newTicket})
        }
        else{
            res.json({error})
        }
    })
}

export const deleteTicket = async (req, res) => {
    const _id = req.params.id
    const date = moment().format("MMMM Do YYYY, h:mm:ss a")


    Tickets.findByIdAndUpdate({_id: _id}, {ticket_id: '', ticket_sub: '', ticket_desc:'THIS TICKET HAS BEEN DELETED', deleted_at: date}, {new:true}, (err, deletedTicket)=>{
        if(!err){
            res.json({deletedTicket}) 
        }
        else{
            res.json({error})
        }
    })
}