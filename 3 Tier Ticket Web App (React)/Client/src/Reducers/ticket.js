import { CRT_TIC, DEL_TIC, EDIT_TIC, GET_TIC } from "../constants";

const ticketReducer = (tickets = [], action) => {
    switch(action.type){
        case CRT_TIC: 
            return [...tickets, action.data.newTicket]

        case GET_TIC:
            return 

        case EDIT_TIC:
            return tickets.map((ticket, index) => {
                if(ticket._id !== action.data.newTicket._id){
                    return ticket
                }else{
                    return action.data.newTicket
                }
            })

        case DEL_TIC:
            return tickets.map((ticket, index) => {
                if(ticket._id !== action.data.deletedTicket._id){
                    return ticket
                }else{
                    return action.data.deletedTicket
                }
            })

        default: 
            return tickets;
    }
}

export default ticketReducer