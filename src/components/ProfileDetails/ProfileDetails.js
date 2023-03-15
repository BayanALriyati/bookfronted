import React from 'react'
import Footer from '../Footer/Footer'
import './ProfileDetails.css'

export default function ProfileDetails() {
  return (
    <>
    
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
          <div className="row gutters">
            {/*  */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3 className="mb-2 text-primary personal mb-5">Personal Details   <s>ـــــ.</s></h3>
            </div>
            {/*  */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName" className="TextForDetail">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter full name"
                />
              </div>
            </div>
            {/*  */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="eMail"  className="TextForDetail">Last Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="eMail"
                  placeholder="Enter email ID"
                />
              </div>
            </div>
            {/*  */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone" className="TextForDetail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website" className="TextForDetail">Website URL</label>
                <input
                  type="url"
                  className="form-control"
                  id="website"
                  placeholder="Website url"
                />
              </div>
            </div>
          </div>
          {/* tow button */}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-primary botn">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

    <Footer/>
  </div>

    
    </>
  )
}
