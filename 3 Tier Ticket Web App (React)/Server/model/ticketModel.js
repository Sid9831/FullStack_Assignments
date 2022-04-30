import mongoose from 'mongoose'

const ticketSchema = mongoose.Schema({
    ticket_id: {type: String, default: "Siddharth"},
    ticket_sub: String,
    ticket_desc: String,
    created_at: {type: String, default: new Date},
    updated_at: {type: String, default: ''},
    deleted_at: {type:String, default: ''}
})

const tickets = mongoose.model("Tickets", ticketSchema)

export default tickets