import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Bus from '../Buses/Bus'
import SearchTicket from '../SearchTicket/SearchTicket'

const FromToDestination = () => {

    const [open, setopen] = useState(false)
    const [validatation, setvalidatation] = useState(false)
    const [ticketData, setticketData] = useState({
        name: '',
        number: '',
        age: '',
        pickupPoint: '',
        dropPoint: '',
        date: '',
        acnonac: '',
        statecode: (new Date().getTime())
    })

    let ourState = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"]

    const searchBuses = (e) => {
        setvalidatation(true)
        e.preventDefault()
        if (ticketData.name && ticketData.number && ticketData.pickupPoint && ticketData.date && ticketData.dropPoint) {
            // dispatch(getdataOfUsers(ticketData))
            setopen(true)
        }
    }

   
    return (
        <div className='ticketAndBus'>
            <div className='ticketBookingForm'>

                <form>
                    <input type="text" name='name' placeholder='enter your name' onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true} />

                    {
                        validatation && ticketData.name == "" && <small style={{ color: "red" }}>Name is required</small>
                    }
                    <input type="number" name='age' placeholder='enter your age' onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true} />

                    {
                        validatation && ticketData.age == "" && <small style={{ color: "red" }}>age is required</small>
                    }

                    <input type="text" name='number' placeholder='enter your number' onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true} />
                    {
                        validatation && ticketData.number == "" && <small style={{ color: "red" }}>number is required</small>
                    }

                    <select name="pickupPoint" id="pickupPoint" onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true}>
                        <option hidden={true}>FROM</option>
                        {
                            ourState?.map(states => <option value={states}>{states}</option>)
                        }
                    </select>
                    {
                        validatation && ticketData.pickupPoint == "" && <small style={{ color: "red" }}>pickupPoint is required</small>
                    }

                    <select name="dropPoint" id="dropPoint" onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true}>
                        <option hidden={true}>TO</option>
                        {
                            ourState?.map(states => <option value={states}>{states}</option>)
                        }
                    </select>
                    {
                        validatation && ticketData.dropPoint == "" && <small style={{ color: "red" }}>dropPoint is required</small>
                    }
                    <input type="Date" name='date' onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true} />
                    {
                        validatation && ticketData.date == "" && <small style={{ color: "red" }}>date is required</small>
                    }


                    <select name="acnonac" id="acnonac" onChange={(e) => setticketData({ ...ticketData, [e.target.name]: e.target.value })} required={true}>
                        <option hidden={true}>AC NonAC</option>
                        <option value={700}>Non AC ($ 700)</option>
                        <option value={1000}>AC ($ 1000)</option>
                    </select>
                    {
                        validatation && ticketData.acnonac == "" && <small style={{ color: "red" }}>AC nonAC is required</small>
                    }

                    <button type='submit' onClick={(e) => searchBuses(e)} >select seat</button>
                </form>
                <hr />
                

                <div className="allTicketData">
                    <Link to='/ticket'>All Ticket Data</Link>
                </div>
                <hr />
                <div className="seachSection">
                    <SearchTicket />
                </div>
            </div>
            {
                open && <Bus ticketData={ticketData} />
            }

        </div>
    )
}

export default FromToDestination
