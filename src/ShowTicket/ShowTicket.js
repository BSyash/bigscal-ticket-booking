import React from 'react'
import { useHistory, useLocation } from 'react-router';

const ShowTicket = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div className='showTickets'>


            <header>
                <h1>Ticket Invoice</h1>
                <address contenteditable>
                    <h4>Name : {location.state?.name}</h4>
                    <h4>Number : {location.state?.number}</h4>

                </address>

                <span><img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png" /><input type="file" accept="image/*" /></span>
            </header>
            <article>
                <h1>Recipient</h1>

                <table class="meta">
                    <tr>
                        <th><span contenteditable>Invoice #</span></th>
                        <td><span contenteditable style={{ backgroundColor: 'bisque' }}>{location?.state?.statecode}</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Date</span></th>
                        <td><span contenteditable>{location?.state?.date}</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Amount Due</span></th>
                        <td><span id="prefix" contenteditable>$</span><span>{(location?.state?.selectedSeats?.length) * (location?.state?.acnonac)}</span></td>
                    </tr>
                </table>
                <table class="inventory">
                    <thead>
                        <tr>
                            <th><span contenteditable>Item</span></th>
                            <th><span contenteditable>age</span></th>
                            <th><span contenteditable>Rate</span></th>
                            <th><span contenteditable>AC - NonAc</span></th>

                            <th><span contenteditable>Seats</span></th>
                            <th><span contenteditable>Price</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span contenteditable>Bus Ticket</span></td>
                            <td><span contenteditable>{location.state?.age}</span></td>
                            <td><span data-prefix>$</span><span contenteditable>{location.state?.acnonac}</span></td>
                            <td> <span contenteditable>{location.state?.acnonac == '1000' ? 'AC' : 'Non Ac'}</span></td>

                            <td><span contenteditable>{location?.state?.selectedSeats?.length}</span></td>
                            <td id='price' style={{ backgroundColor: 'yellowgreen' }}><span data-prefix>$</span><span>{(location?.state?.selectedSeats?.length) * (location?.state?.acnonac)}</span></td>
                        </tr>
                    </tbody>
                </table>

                <table class="balance">
                    <tr>
                        <th><span contenteditable>Total</span></th>
                        <td><span data-prefix>$</span><span>{(location?.state?.selectedSeats?.length) * (location?.state?.acnonac)}</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Amount Paid</span></th>
                        <td><span data-prefix>$</span><span contenteditable>{(location?.state?.selectedSeats?.length) * (location?.state?.acnonac)}</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Balance Due</span></th>
                        <td><span data-prefix>$</span><span>00.00</span></td>
                    </tr>
                </table>
            </article>
            <hr />
            <div className="printAndback">
                <button id='printPageButton' onClick={() => window.print()}>Print</button>
                <button id='printPageButton' onClick={() => history.push('/fromtodestination')}>Home</button>

            </div>


        </div>
    )
}

export default ShowTicket
