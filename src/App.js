import React from 'react'
import './App.css'
// import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProfilePicture from './components/ProfilePicture/ProfilePicture'
import BookShelves from './pages/BookShelves/BookShelves'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import MyProfile from './pages/MyProfile/MyProfile'

export default function App() {
  return (
    <>

  <div className="app-container light-theme">
    <Header/>
    {/* <BookShelves/> */}
    <Favorites/>
    {/* <Home/> */}
    {/* <Login/> */}
    {/* <MyProfile/> */}

  </div>

    
    </>
  )
}
