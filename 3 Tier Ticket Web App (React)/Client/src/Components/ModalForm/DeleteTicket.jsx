import { Button } from "antd"
import { delTicket } from "../../Actions/ticketActions"
import { useDispatch } from 'react-redux'

const DeleteTicket = ({ cellValues }) => {
    const email = JSON.parse(localStorage.getItem('user'))?.user.email
    const dispatch = useDispatch()
    const deleteTicket = () => {
        if (window.confirm("Are you sure to delete this ticket?")) {
            dispatch(delTicket(cellValues.row._id))
        }
        else {
            alert("Not deleted")
        }
    }

    return (
        <Button
            type="danger"
            disabled={!(email === cellValues.row.ticket_id)}
            onClick={deleteTicket}
        >
            Delete
        </Button>
    )
}

export default DeleteTicket