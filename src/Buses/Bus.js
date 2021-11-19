import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { emptySeats, getdataOfUsers, removeSeats, seats } from '../Features/BusTicketslice'
import swal from 'sweetalert';


const Bus = ({ ticketData }) => {
    const dispatch = useDispatch()
    const selectedSit = useSelector(state => state.busTicket.selectedSeats)
    const ticketDetails = useSelector(state => state.busTicket.ticketDetails)

    const [seat, setseats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
    const history = useHistory()

    const selectseat = (e) => {

        const className = e.target.className
        if (className == 'whitebox') {
            const id = e.target.value
            dispatch(seats(id))
            e.target.classList = 'greenbox'
        } else {
            e.target.className = 'whitebox'
            const id = e.target.value
            const filter = selectedSit.filter(
                (val) => {
                    return (val != id)
                }
            )
            dispatch(removeSeats(filter))
        }
    }
    let selectedSits = []
    const TicketDate = ticketDetails?.filter((Details) => (
        Details?.date == ticketData?.date && Details?.pickupPoint == ticketData?.pickupPoint && Details?.dropPoint == ticketData?.dropPoint && Details?.acnonac == ticketData?.acnonac
    ))?.map(items => selectedSits.push(...items.selectedSeats))



    const Confirmseats = () => {
        dispatch(getdataOfUsers({ ...ticketData, selectedSeats: selectedSit }))
        dispatch(emptySeats())
        swal({
            title: "Your Sit Booked Success!",
            text: "Enjoy Your Journey!",
            icon: "success",
            button: "welCome!",
        })
        history.push('/ticket')

    }
    return (
        <>
            <div className='busSeats'>
                {seat.map((val, id) => {
console.log("val",val);

                    return (<button className='whitebox' value={val} onClick={(e) => selectseat(e)} key={id} outline disabled={selectedSits?.includes(String(val))}  >{val}</button>)
                })}
                <button onClick={() => Confirmseats()}>Confirm</button>
            </div>

        </>
    )
}

export default Bus
