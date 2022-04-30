import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../Actions/ticketActions";
import { DataGrid } from '@mui/x-data-grid'
import EditTicket from "./ModalForm/EditTicket";
import DeleteTicket from "./ModalForm/DeleteTicket";


const columns = [
    { field: '_id', headerName: 'Ticket ID', width: 100, hide: true },
    { field: 'ticket_id', headerName: 'From', width: 200 },
    { field: 'ticket_sub', headerName: 'Subject', width: 150 },
    { field: 'ticket_desc', headerName: 'Description', width: 580 },
    { field: 'created_at', headerName: 'Created', width: 100 },
    { field: 'updated_at', headerName: 'Updated', width: 100 },
    { field: 'deleted_at', headerName: 'Deleted', width: 100 },
    {
        field: "Edit",
        renderCell: (cellValues) => {
            
          return (
            <EditTicket cellValues={cellValues}/>
          );
        }
    },
    {
        field: "Delete",
        renderCell: (cellValues) => {
            return(
                <DeleteTicket cellValues={cellValues}/>
            )
        }
    }
]



const TicketGrid = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(((getTickets())))
    }, [dispatch])

    const tickets = useSelector(store => store.tickets)
    console.log(tickets)
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                getRowId={row => row._id}
                rows={tickets}
                columns={columns}
                pageSize={10}
            />
        </div>
    )
}

export default TicketGrid