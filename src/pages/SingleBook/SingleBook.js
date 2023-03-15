import React from 'react'
import Footer from '../../components/Footer/Footer'
import './SingleBook.css'

export default function SingleBook() {
  return (
    <><div className="book-details-container">
    <div className="details-container ">
      <div className="cover-pic-and-info-container">
        <img
          className="book-details-cover-pic"
          src="https://assets.ccbp.in/frontend/react-js/one-life-one-chance-book.png"
          alt="One life one chance"
        />
        <div className="info-container">
          <h1 className="book-details-title ">One life one chance</h1>
          <p className="book-details-author-name ">Luke Richmond</p>
          <div className="rating-container">
            <p className="rating-text ">Avg Rating</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              color="#FBBF24"
              height={18}
              width={18}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(251, 191, 36)" }}
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="book-details-rating ">4.2</p>
          </div>
          <p className="book-details-status-text ">
            Status:<span className="book-details-status"> Read</span>
          </p>
          <button type="button" className="add-to-favorites-button ">
            Add To Favorites{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              color="#475569"
              height={25}
              width={25}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(71, 85, 105)" }}
            >
              <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="horizontal-line" />
      <h1 className="about-author-heading ">About Author</h1>
      <p className="about-author-description ">
        Luke Richmond is an Aussie adventurer who has conquered the odds during
        many internationally acclaimed expeditions. Luke's lifelong passion is to
        make adventure accessible to everyone and to inspire others to feel the
        reward of conquering a physical and mental challenge
      </p>
      <h1 className="about-book-heading ">About Book</h1>
      <p className="about-book-description ">
        In this lifetime, you only have just one opportunity to make it happen.
        Inspirational book understanding your actions and efforts. Establishing
        goals and following through, understanding life and its obstacles. Learn
        how to overcome setbacks.
      </p>
    </div>
  </div>

  <Footer/>
  </>
  )
}
