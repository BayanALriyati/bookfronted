import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddBook from './components/AddBook/AddBook'
// import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProfilePicture from './components/ProfilePicture/ProfilePicture'
import UpdateBook from './components/UpdateBook/UpdateBook'
import BookShelves from './pages/BookShelves/BookShelves'
// import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import MyProfile from './pages/MyProfile/MyProfile'
// import SingleBook from './pages/SingleBook/SingleBook'

export default function App() {
  return (
    <>

  <div className="app-container light-theme">
  <Header/>

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/MyProfile" element={<MyProfile/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    {/* <Route path="/SingleBook" element={<SingleBook/>}></Route> */}
    <Route path="/book" element={<BookShelves/>}></Route>
    {/* <BookShelves/> */}
    {/* <Favorites/> */}
    {/* <Login/> */}
    {/* <MyProfile/> */}
    {/* <SingleBook/>  */}
   
    <Route path='/add' element={<AddBook/>}></Route>
    <Route path='/update' element={<UpdateBook/>}></Route>
  
    </Routes>
    
  </div>

    
    </>
  )
}
