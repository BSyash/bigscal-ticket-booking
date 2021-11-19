import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { signupUsers } from '../Features/BusTicketslice'

const LogIn = () => {
    const [validatation, setvalidatation] = useState(false)
    const [signUp, setsignUp] = useState({
        email: '',
        password: '',

    })
    const history = useHistory()
    const dispatch = useDispatch()
    const LogIn = (e) => {
        setvalidatation(true)
        e.preventDefault()
        if (signUp.email && signUp.password === 'test@1234') {
            dispatch(signupUsers(signUp))
            history.push('/fromtodestination')
        }
    }
    return (
        <div className='logInForm'>
            <form >
                <p><span>Welcome</span><span>To</span><span>BigScal</span><span>Travels</span></p>
                <input type="email" name='email' placeholder='Enter email' onChange={(e) => setsignUp({ ...signUp, [e.target.name]: e.target.value })} />
                {
                    validatation && signUp.email == "" && <small style={{ color: "red" }}>email is required</small>
                }
                <input type="password" name='password' placeholder='enter  password' onChange={(e) => setsignUp({ ...signUp, [e.target.name]: e.target.value })} />
                {
                    validatation && signUp.password !== "test@1234" ? <small style={{ color: "red" }}>password is incorrect</small> : validatation && signUp.password == "" && <small style={{ color: "red" }}>password is required</small>
                }
                <button onClick={(e) => LogIn(e)}>Log In</button>
            </form>
        </div>
    )
}

export default LogIn
