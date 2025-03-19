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

    return (
        <div className='mx-auto mt-[200px] flex justify-center items-center w-1/2 max-w-[28rem] min-w-[15px] flex-1'>
            <form className='w-full bg-[#684fa3] p-10 rounded-[10px] shadow-lg flex flex-col items-end gap-7'>
                <h1 className='w-full text-center text-white'>Login</h1>
                <input
                    type='text'
                    name='mail'
                    placeholder='Username'
                    className='inputForm'
                    onChange={(event) => handleInputChange(event)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className={`inputForm 
                        ${errorPassword ? 'bg-[rgba(236,129,129,0.747)] border-[rgba(226,5,5,0.486)]' : ''}`}
                    onChange={(event) => handleInputChange(event)}
                />
                <button
                    type='submit'
                    className='buttonApp hover:rounded-[25px] hover:border-black'
                    onClick={(event) => handleDataSend(event)}>
                    Login
                </button>
            </form>
        </div>
    )
}
