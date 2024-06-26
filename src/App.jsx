import { useState } from 'react'
import Leader from '../src/components/accounts/leader'
import MainPage from './components/mainPage'
import Auth from './components/accounts/auth/auth'
import SignUp from './components/accounts/auth/signUp'
import { Route, Router, Routes } from 'react-router-dom'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/NAFI/' element = {<MainPage />} />
        <Route path='/NAFI/auth' element = {<Auth />} />
        <Route path='/NAFI/auth/signUp' element = {<SignUp />}/>
        <Route path='/NAFI/auth/account' element = {<Leader />} />
      </Routes>
    </div>
  )
}

export default App
