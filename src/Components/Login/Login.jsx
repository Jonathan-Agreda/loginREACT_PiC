import './Login.css';
import { useState } from 'react';

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [dataSend, setDataSend] = useState(false)

    const inputHandlers = {
        mail: setUsername,
        password: setPassword
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        const handler = inputHandlers[name]
        if (handler) {
            handler(value)
        }
    }

    const handleDataSend = (event) => {
        event.preventDefault()
        console.log(username, password)
        setDataSend(true)
    }

    const errorEmail = ((username === "" || !username.includes('@')) && dataSend)
    const errorPassword = ((password === "" || password.length < 6) && dataSend)

    const errorStyleInput = {
        backgroundColor: errorPassword ? 'rgba(24, 129, 129, 0.747)' : ' ',
        border: errorPassword ? '1px solid rgba(226, 5, 5, 0.486)' : ''
    }

    return (
        <div className='login-form-container'>
            <form className='login-form'>
                <h1>Login</h1>
                <input type='text' name='mail' placeholder='Username'
                    className={`input-field ${errorEmail ? 'input-field-error' : ''}`}
                    onChange={(event) => handleInputChange(event)} />
                <input type='password' name='password' placeholder='Password'
                    style={errorStyleInput}
                    className={`input-field`}
                    onChange={(event) => handleInputChange(event)} />
                <button type="submit"
                    className='submit-button'
                    onClick={(event) => handleDataSend(event)}
                >Login</button>
            </form>
        </div>
    )
}
