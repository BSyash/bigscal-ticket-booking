import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const SearchTicket = () => {
    const history = useHistory()
    const [searchinpt, setsearchinpt] = useState()
    const ticketDetails = useSelector(state => state.busTicket.ticketDetails)
    const searchTicket = () => {
        const searchCode = ticketDetails?.find(detail => detail.statecode === Number(searchinpt))
        
        history.push('/showticket',searchCode)

    }
    return (
        <>
            <input type="number" placeholder='Search Your ticket' onChange={(e) => setsearchinpt(e.target.value)} />
            <button onClick={() => searchTicket()}>Search</button>
        </>
    )
}

export default SearchTicket
