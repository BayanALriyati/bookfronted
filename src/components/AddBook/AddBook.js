import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import LeftSide from '../LeftSide/LeftSide';
import './AddBook.css'

export default function AddBook() {
  const navigate = useNavigate();
  const [book , setBook] = useState({
    title:'',
    author:'',
    description : '',
    image: '',

  });
  
 const handlChange =(e)=>{
    // console.log(e.target.value);
    const newBook = {...book}
    newBook[e.target.name] = e.target.value
    console.log(newBook);
    setBook(newBook)
 }

 const handlImage =(e)=>{
  // console.log(e.target.value);
  const newBook = {...book};
  newBook[e.target.name] = e.target.files[0];
  console.log(newBook);
  setBook(newBook);
}
const handleSubmit=(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append('title', book.title)
  formData.append('author' , book.author  )
  formData.append('description' , book.description)
  formData.append('image' , book.image )
  console.log(formData.get('title'));
  console.log(formData.get('author'));
  console.log(formData.get('description'));
  console.log(formData.get('image'));
  axios.post('http://localhost/bookfronted/backend/books/create.php',formData)
  .then(res=> {
    console.log(res);
    setBook({
      title:'',
      author:'',
      description : '',
      image: '',
    })
    
    navigate('/book');
  })
}




  return (
    <>
    <div className="bookshelves-container">
<LeftSide/>
    
 <div className="header-and-books-container">

{/*========== Search Section ==========*/}
    {/* <div className="book-shelf-header-container">
      <h1 className="header-heading ">All Books</h1>
      
    </div> */}
{/*====================================*/}

{/*========== Book Item ==========*/}
    <div className="all-books-container">
    <div className="container">
  <div className="row gutters">
    
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          {/* details */}
          <form action=""  onSubmit={handleSubmit}>
            <div className="row gutters">
              {/*  */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h3 className="mb-2  personal mb-5">Add New  <hr/></h3>
              </div>
              {/*  */}
            
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="fullName" className="TextForDetail">Book Title</label>
                  <input
                    type="text"
                    onChange={handlChange}
                    className="form-control"
                    id="fullName"
                    name='title'
                    value={book.title}
                    placeholder="Enter Book Name"
                  />
                </div>
              </div>
              {/*  */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail"  className="TextForDetail">Author Name</label>
                  <input
                    type="text"
                    onChange={handlChange}
                    className="form-control"
                    id="eMail"
                    name='author'
                    value={book.author}
                    placeholder="Enter Author Name"
                  />
                </div>
              </div>
              {/*  */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="phone" className="TextForDetail">About Book</label>
                  <input
                    type="text"
                    onChange={handlChange}
                    className="form-control"
                    id="phone"
                    name = 'description'
                    value={book.description}
                    
                    placeholder="Write book description"
                  />
                </div>
              </div>
            
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                      <label className="TextForDetail">Select Cover Image :</label>
                      <input className="form-control"  name = 'image' onChange={handlImage} type="file" accept="image/*"/>
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    className="btn btn-outline-secondary cancel-button"
                  >
                    Cancel
                  </button>
                  {/* <button type="button" id="submit" name="submit" className="btn btn-primary botn">
                    Update
                  </button> */}
                  <input type="submit" className="btn btn-outline-success ms-2 bton" value="Add Book"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

    <Footer/>
  </div>
  </div>
    
    </>
  )
}
