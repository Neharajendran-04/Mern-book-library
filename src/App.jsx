import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/Pages/Home'
import Auth from './Pages/Auth'
import Profile from './user/Pages/Profile'
import Books from './user/Pages/Books'
import View from './user/Pages/View'
import AdminDashboard from './admin/Pages/AdminDashboard'
import AdminResource from './admin/Pages/AdminResource'
import AdminSettings from './admin/Pages/AdminSettings'
import Preloader from './Components/Preloader'
import { useState } from 'react'
import Contact from './user/Pages/Contact'


function App() {

  const [isLoading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000)
  return (
   <>
   <Routes>
    <Route path='/' element={isLoading ? <Preloader /> : <Home />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/books' element={<Books />}/>
    <Route path='/login' element={<Auth />}/>
    <Route path='/register' element={<Auth />}/>

    <Route path='/profile/:id' element={<Profile />}/>
    <Route path='/books/:id' element={<View />}/>

    <Route path='/admin' element={<AdminDashboard />}/>
    <Route path='/admin/resources' element={<AdminResource />}/>
    <Route path='/admin/settings' element={<AdminSettings />}/>
   </Routes>
   </>
  )
}

export default App
