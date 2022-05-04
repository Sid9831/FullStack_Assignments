import { Component, OnInit, ViewChild } from '@angular/core';
import { Tickets } from '../shared/tickets.model';
import { TicketsService } from '../shared/tickets.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SigninService } from '../shared/signin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['ticket_id','ticket_sub','ticket_desc','created_at','updated_at','deleted_at','Edit','Delete']
  allTickets = new MatTableDataSource<Tickets>();

  Ticket = new Tickets("","","","","","","")

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public ticketService: TicketsService, public signinService: SigninService) { }

  ngOnInit(): void {
    this.getAllTickets()
  }

  getAllTickets(){
    this.ticketService.getTickets().subscribe((res) => {
      this.ticketService.allTickets = res as Tickets[]
      this.allTickets = new MatTableDataSource(this.ticketService.allTickets);
      this.allTickets.paginator = this.paginator;
    })
  }

  TicketForm(form: NgForm){
    this.Ticket.email = this.signinService.user.email
    if(this.Ticket._id === "" || this.Ticket._id === null){
      this.ticketService.addTicket(this.Ticket).subscribe(res => {
        if(res){
          this.getAllTickets()
        }
      })
    }
    else{
      this.ticketService.editTicket(this.Ticket).subscribe(res => {
        if(res){
          this.getAllTickets()
        }
      })
    }
    this.resetForm(form)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allTickets.filter = filterValue.trim().toLowerCase();
  }

  onEditClick(element: any) {
    this.Ticket._id = element._id
    this.Ticket.title = element.ticket_sub
    this.Ticket.description = element.ticket_desc
  }

  onDeleteClick(id: String) {
    if(window.confirm("Are you sure to delete this ticket?")){
      this.ticketService.deleteTicket(id).subscribe(res => {
        if(res){
          this.getAllTickets()
        }
      })
    }
  }

  resetForm(form: NgForm) {
    form.reset()
  }
}
