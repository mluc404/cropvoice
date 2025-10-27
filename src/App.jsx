import { useState } from 'react'
import './App.css'
import { DashBoard } from './components/DashBoard'
import { Header } from './components/Header'

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <DashBoard />
    </div>
  )
}

export default App
