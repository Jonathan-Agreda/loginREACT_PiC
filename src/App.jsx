import React from 'react'
import './App.css'

import { Header } from './Components/Header/Header'
import { Login } from './Components/Login/Login'

export const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Login />
    </div>
  )
}
