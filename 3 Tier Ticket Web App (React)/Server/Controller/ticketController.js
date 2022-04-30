import Tickets from "../model/ticketModel.js";

export const addTicket = async (req, res) => {
    const { title, description, email } = req.body

    try {
        const date = new Date();
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        const Day = d.toString() + "/" + m.toString() + "/" + y.toString();
        const newTicket = await Tickets.create({ ticket_id: email, ticket_sub: title, ticket_desc: description, created_at: Day })

        res.status(201).json({ newTicket })
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getTickets = async (req, res) => {
    //Even though you are not using 'req' here, it wont work if it is removed
    try {
        const tickets = await Tickets.find()

        res.status(200).json({ tickets })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editTicket = async (req, res) => {
    const { _id, title, description } = req.body
    console.log(_id)
    
    const date = new Date();
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        const Day = d.toString() + "/" + m.toString() + "/" + y.toString();

    Tickets.findByIdAndUpdate({_id: _id}, {ticket_sub: title, ticket_desc: description, updated_at: Day}, {new:true}, (err, newTicket)=>{
        if(!err){
            res.json({newTicket})   //curly brackets matter :-)
        }
        else{
            res.json({error})
        }
    })
}

export const deleteTicket = async (req, res) => {
    const _id = req.params.id
    console.log(_id)
    console.log("Hello")
    const date = new Date()
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    const Day = d.toString() + "/" + m.toString() + "/" + y.toString();

    Tickets.findByIdAndUpdate({_id: _id}, {ticket_id: '', ticket_sub: '', ticket_desc:'THIS TICKET HAS BEEN DELETED', deleted_at: Day}, {new:true}, (err, deletedTicket)=>{
        if(!err){
            res.json({deletedTicket})   //curly brackets matter :-)
        }
        else{
            res.json({error})
        }
    })
}