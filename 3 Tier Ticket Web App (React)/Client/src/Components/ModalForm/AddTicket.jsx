import React, { useState } from 'react';
import { Button } from 'antd'
import AddTicketForm from './AddTicketForm';
import {useDispatch} from 'react-redux'
import {addTicket} from '../../Actions/ticketActions'

const AddTicket = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
    const email = JSON.parse(localStorage.getItem('user'))?.user.email

    const onCreate = (values) => {
        setVisible(false);
        dispatch(addTicket({...values, email: email}))
    };

    return (
        <div>
            <Button
            style={{margin: '20px 0px 20px 10px'}}
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Create Ticket
            </Button>
            <AddTicketForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default AddTicket