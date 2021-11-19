import { configureStore } from '@reduxjs/toolkit'
import BusTicketslice from '../Features/BusTicketslice'

export const store = configureStore({
    reducer: {
        busTicket: BusTicketslice
    },
})