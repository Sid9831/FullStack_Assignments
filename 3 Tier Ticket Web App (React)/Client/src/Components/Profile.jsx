import AddTicket from "./ModalForm/AddTicket";
import TicketGrid from "./TicketGrid";


const Profile = () => {

    //const tickets = useSelector(store=>store)   //useSelector is returning entire store with your two reducers in it.

    //console.log(tickets)
    


    return(
        <>
        <AddTicket/>

        <TicketGrid/>
        </>
    )
}

export default Profile