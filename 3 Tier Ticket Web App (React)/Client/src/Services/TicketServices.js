import axios from 'axios'
const url = 'http://localhost:8080/tickets'

class TicketServices {
    addTicket = (ticket) => {
        return axios.post(`${url}/addTicket`, ticket)
    }

    getTickets = () => {
        return axios.get(`${url}/getTickets`)
    }

    editTicket = (ticket) => {
        return axios.post(`${url}/editTicket`, ticket)
    }

    deleteTicket = (id) => {
        return axios.delete(`${url}/${id}`)
    }
}

export default new TicketServices()