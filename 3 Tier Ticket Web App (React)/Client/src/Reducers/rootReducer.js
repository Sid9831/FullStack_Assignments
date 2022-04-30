import { combineReducers } from 'redux'
import userReducer from './user'
import ticketReducer from './ticket'

export const rootReducer = combineReducers({ user: userReducer, tickets: ticketReducer })