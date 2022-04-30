import React, { useState } from 'react';
import { Button } from 'antd'
import EditTicketForm from './EditTicketForm';
import { editTicket } from '../../Actions/ticketActions';
import { useDispatch } from 'react-redux';

const EditTicket = ({cellValues}) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
    const email = JSON.parse(localStorage.getItem('user'))?.user.email

    const onCreate = (values) => {
        console.log(values)
        setVisible(false);
        dispatch(editTicket({...values, email: email}))
    };

    return (
        <div>
            <Button
                type="primary"
                disabled={!(email === cellValues.row.ticket_id)}
                onClick={() => {
                    setVisible(true);
                }}
            >
                Edit
            </Button>
            <EditTicketForm
                cellValues = {cellValues}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default EditTicket