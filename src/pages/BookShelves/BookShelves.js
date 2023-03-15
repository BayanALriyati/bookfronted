import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBook from '../../components/AddBook/AddBook'
import Footer from '../../components/Footer/Footer'
import LeftSide from '../../components/LeftSide/LeftSide'
import RightSide from '../../components/RightSide/RightSide'
import './BookShelves.css'

export default function BookShelves() {
  return (
    <>
<div className="bookshelves-container">
  <LeftSide/>
  <RightSide/>

  

</div>

    
    </>
     
  
   
  )
}
