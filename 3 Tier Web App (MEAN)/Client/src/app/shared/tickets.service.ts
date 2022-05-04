import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tickets } from './tickets.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  Ticket: Tickets;
  allTickets: Tickets[];

  baseUrl = 'http://localhost:8080/tickets'

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get(this.baseUrl + "/getTickets")
  }

  addTicket(ticket: Tickets) {
    return this.http.post(this.baseUrl + "/addTicket", ticket)
  }

  editTicket(ticket: Tickets) {
    return this.http.post(this.baseUrl + "/editTicket", ticket)
  }

  deleteTicket(id: String) {
    return this.http.delete(this.baseUrl + `/${id}`)
  }

}
