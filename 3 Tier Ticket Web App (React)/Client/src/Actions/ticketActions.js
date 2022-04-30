import { CRT_TIC, EDIT_TIC, GET_TIC, DEL_TIC } from "../constants";

import TicketServices from '../Services/TicketServices'

export const addTicket = (ticket) => async dispatch => {
    try {
        const { data } = await TicketServices.addTicket(ticket)

        dispatch({ type: CRT_TIC, data })

    }
    catch (error) {
        throw error
    }
}

export const getTickets = () => async dispatch => {
    try {
        const { data } = await TicketServices.getTickets();
        dispatch({ type: GET_TIC, data })
    }
    catch (error) {
        throw error
    }
}

export const editTicket = (ticket) => async dispatch => {
    try{
        const {data} = await TicketServices.editTicket(ticket)
        console.log(data)
        dispatch({type: EDIT_TIC, data})
    }
    catch(error){
        throw error
    }
}

export const delTicket = (id) => async dispatch => {
    try{
        const {data} = await TicketServices.deleteTicket(id)
        console.log(data)
        dispatch({type: DEL_TIC, data})
    }
    catch(error){
        throw error
    }
}