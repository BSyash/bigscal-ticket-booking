import React from 'react'
import { useHistory } from 'react-router';
import FromToDestination from '../FromToDestinationPage/FromToDestination'
import { Route, Switch } from 'react-router-dom';
import DataTable from '../Datatable/DataTable'
import ShowTicket from '../ShowTicket/ShowTicket';
import Navbar from '../Navbar/Navbar';
import LogIn from '../LogIn/LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { signupUsers } from '../Features/BusTicketslice';

const BusTicketBooking = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const signUpDetails = useSelector(state => state.busTicket.signUpDetails)
    return (
        <>


            <div className='userLogIn'> {signUpDetails[0] && <button onClick={() => {
                history.push('/login')
                dispatch(signupUsers())
            }}>Log Out</button>}<span>{signUpDetails[0]?.email ? signUpDetails[0]?.email[0].toUpperCase() : "u"}</span> {signUpDetails[0]?.email ? signUpDetails[0]?.email : (<>user { history.push('/')}</>)}</div>

            <Route exact path='/'>
                <LogIn />
            </Route>
            
            <Route exact path='/fromtodestination'>
                <FromToDestination />
            </Route>
            <Route exact path='/ticket'>
                <DataTable />
            </Route>
            <Route exact path='/showticket'>
                <ShowTicket />
            </Route>

        </>
    )
}

export default BusTicketBooking
