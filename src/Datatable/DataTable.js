import React from 'react'
import { Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletedataOfUsers } from '../Features/BusTicketslice';
import SearchTicket from '../SearchTicket/SearchTicket';
import swal from 'sweetalert';

const DataTable = () => {
    const history = useHistory()
    const ticketDetails = useSelector(state => state.busTicket.ticketDetails)
    const dispatch = useDispatch()
    const deleteDeatil = (i) => {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const filterDetails = ticketDetails?.filter((tickets, id) => id != i)
                    dispatch(deletedataOfUsers(filterDetails))
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                }
                else {
                    swal("Your imaginary file is safe!");
                }
            });

    }


    return (<>
        <button onClick={() => history.push('/fromtodestination')}>back</button>
        <Table >
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>number</th>
                    <th>date</th>
                    <th>pichupPoint</th>
                    <th>dropPoint</th>
                    <th>AC or NonAC</th>
                    <th>Seat numbers</th>
                    <th>Total Seats</th>
                    <th>Total Amount $ </th>
                    <th>States Code</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>delete Ticket</th>
                </tr>
            </thead>
            <tbody>
                {
                    ticketDetails?.map((details, i) =>
                        <tr>
                            <th>{i + 1}</th>
                            <th>{details?.name}</th>
                            <th>{details?.age}</th>
                            <th>{details?.number}</th>
                            <th>{details?.date}</th>
                            <th>{details?.pickupPoint}</th>
                            <th>{details?.dropPoint}</th>
                            <th>{(details?.acnonac) === '1000' ? 'AC' : 'NonAc'}</th>
                            <th>{details?.selectedSeats?.map(seat => ` ${seat} `)}</th>
                            <th>{details?.selectedSeats?.length}</th>
                            <th>$ {(details?.selectedSeats?.length) * Number(details?.acnonac)}</th>
                            <th>{details?.statecode}</th>
                            <th>SuccessFull</th>
                            <th><button style={{ backgroundColor: 'lightgreen', padding: '5px' }} onClick={() => history.push('/showticket', details)}>Show Ticket</button></th>
                            <th><button style={{ backgroundColor: 'red', padding: '5px', color: 'white' }} onClick={() => deleteDeatil(i)}>Delete</button></th>

                        </tr>
                    )
                }

            </tbody>
        </Table>

    </>
    )
}

export default DataTable
