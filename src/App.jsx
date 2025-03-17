import React from 'react'

import { Header } from './Components/Header/Header'
import { Login } from './Components/Login/Login'

export const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <Login />
    </div>
  )
}
