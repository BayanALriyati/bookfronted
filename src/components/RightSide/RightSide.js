import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UilEdit } from '@iconscout/react-unicons'
import { UilTrashAlt } from '@iconscout/react-unicons'
import Footer from '../Footer/Footer'
import './RightSide.css'
import { Link, Route, Routes } from 'react-router-dom'
import AddBook from '../AddBook/AddBook'

export default function RightSide() {
  const [leftBooks , setLeftBooks]= useState([])
  const [rightBooks , setRightBooks]= useState([])
  useEffect(()=>{
    axios.get('http://localhost/bookfronted/backend/books/read.php')
    .then(res=>{
      console.log(res);
      const leftCount = Math.ceil(res.data.length/2);
      console.log(res.data.length-leftCount);
      const rightCount = leftCount - res.data.length;
      const leftSide = res.data.slice(0 , leftCount )
      const rightSide = res.data.slice( rightCount )
      console.log(leftSide);
      console.log(rightSide);
      setLeftBooks(leftSide)
      setRightBooks(rightSide)
    })
  },[])



  return (
    <>
    
 <div className="header-and-books-container">

{/*========== Search Section ==========*/}
    <div className="book-shelf-header-container">
      <h1 className="header-heading ">All Books</h1>
      <div className="desktop-search-input-container">
        <div className="search-input-container ">
          <input
            type="search"
            className="search-input "
            placeholder="Search"
            defaultValue=""
          />
          <button
            className="search-button "
            type="button"
            value="searchButton"
            testid="searchButton"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="search-icon "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          
          
        </div>
      </div>
    </div>
{/*====================================*/}

{/*========== Book Item ==========*/}
    <div className="all-books-container">
      <div className="left-side-books-container">
        <ul className="book-items-details-container">
           {/* =========left-side map============ */}
          {leftBooks.map(b => (
            <a
            className="book-item-nav-link"
            href="/books/2ece92fb-c131-43b1-9c07-6f32bc465d01"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src={'http://localhost/bookfronted/backend/upload/'+b.image}
                alt="Half Girlfriend"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">{b.title}</h1>
                <p className="book-item-author-name ">{b.author}</p>
                <p className="book-item-status-text ">
                Description:
                  <span className="book-item-status"> {b.description}</span>
                </p>
                <div className="editBook">
                 <Link to={`/update/${b.id}`}> <UilEdit  style={{color: 'black'}}/></Link>
                  <UilTrashAlt/>
                </div>
              </div>
            </div>
          </a>
          ))}
          
        </ul>
      </div>
      <div className="right-side-books-container">
        <ul className="book-items-details-container">
          {/* =========right-side map============ */}
        {rightBooks.map(b => (
            <a
            className="book-item-nav-link"
            href="/books/2ece92fb-c131-43b1-9c07-6f32bc465d01"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src={'http://localhost/bookfronted/backend/upload/'+b.image}
                alt="Half Girlfriend"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">{b.title}</h1>
                <p className="book-item-author-name ">{b.author}</p>
                <p className="book-item-status-text ">
                Description:
                  <span className="book-item-status"> {b.description}</span>
                </p>
                <div className="editBook">
                <Link to={`/update/${b.id}`}> <UilEdit  style={{color: 'black'}}/></Link>
                  <UilTrashAlt/>
                </div>
              </div>
            </div>
          </a>
          ))}
        </ul>
      </div>
    </div>

    <Footer/>
  </div>

    
    </>
  )
}
