import { createSlice } from '@reduxjs/toolkit'

const initialTicketOfBus = {
    ticketDetails: [],
    selectedSeats: [],
    signUpDetails: []
}

export const busTicketsBookings = createSlice({
    name: 'busTickets',
    initialState: initialTicketOfBus,
    reducers: {
        getdataOfUsers: (state, action) => {
            state.ticketDetails = [...state.ticketDetails, action.payload]
        },
        deletedataOfUsers: (state, action) => {
            state.ticketDetails = action.payload
        },
        seats: (state, action) => {
            state.selectedSeats = [...state.selectedSeats, action.payload]
        },
        removeSeats: (state, action) => {
            state.selectedSeats = [...action.payload]
        },
        emptySeats: (state, action) => {
            state.selectedSeats = []
        },
        signupUsers: (state, action) => {
            state.signUpDetails = [action.payload]
        },

    },
})


export const { deletedataOfUsers, emptySeats, getdataOfUsers, seats, removeSeats, signupUsers } = busTicketsBookings.actions

export default busTicketsBookings.reducer