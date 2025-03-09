import './Login.css';
import { useState } from 'react';

export const Login = () => {
    return (
        <div className='login-form-container'>
            <form className='login-form'>
                <h1>Login</h1>
                <input type='text' placeholder='Username' className='input-field' />
                <input type='password' placeholder='Password' className='input-field' />
                <button type="submit" className='submit-button'>Login</button>
            </form>
        </div>
    )
}
