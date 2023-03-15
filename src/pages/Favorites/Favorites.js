import React from 'react'
import './Favorites.css'

export default function Favorites() {
  return (
    <>
 <div className="favorites-container">
  <div className="favorites-content-container">
    <h1 className="favorites-heading ">My Favorites</h1>
    <button type="button" className="remove-all-btn">
      Remove 4 Books
    </button>
    <ul className="favorites-list">
      <a
        className="favorite-book-item-nav-link"
        href="/books/54402549-a4bd-4c99-a176-bd795d47173a"
      >
        <li className="favorite-item ">
          <img
            className="favorite-product-image"
            src="https://assets.ccbp.in/frontend/react-js/one-life-one-chance-book.png"
            alt="One life one chance"
          />
          <div className="favorite-item-details-container">
            <div className="favorite-product-title-brand-container">
              <p className="favorite-product-title ">One life one chance</p>
              <p className="favorite-product-brand ">by Luke Richmond</p>
            </div>
            <div className="total-price-remove-container">
              <p className="favorite-book-status-text ">
                Status: <span className="favorite-book-status">Read</span>
              </p>
              <button className="remove-button " type="button">
                Remove
              </button>
            </div>
          </div>
          <button className="delete-button" type="button" testid="remove">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              color="#616E7C"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(97, 110, 124)" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
            </svg>
          </button>
        </li>
      </a>
      <a
        className="favorite-book-item-nav-link"
        href="/books/e3b9c630-90fa-4166-b26b-469217fd485b"
      >
        <li className="favorite-item ">
          <img
            className="favorite-product-image"
            src="https://assets.ccbp.in/frontend/react-js/the-last-flight-book.png"
            alt="The Last Flight"
          />
          <div className="favorite-item-details-container">
            <div className="favorite-product-title-brand-container">
              <p className="favorite-product-title ">The Last Flight</p>
              <p className="favorite-product-brand ">by Julie Clark</p>
            </div>
            <div className="total-price-remove-container">
              <p className="favorite-book-status-text ">
                Status: <span className="favorite-book-status">Read</span>
              </p>
              <button className="remove-button " type="button">
                Remove
              </button>
            </div>
          </div>
          <button className="delete-button" type="button" testid="remove">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              color="#616E7C"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(97, 110, 124)" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
            </svg>
          </button>
        </li>
      </a>
      <a
        className="favorite-book-item-nav-link"
        href="/books/7850622e-1b70-4396-963d-e68d5a2577d7"
      >
        <li className="favorite-item ">
          <img
            className="favorite-product-image"
            src="https://assets.ccbp.in/frontend/react-js/eyes-to-the-wind-book.png"
            alt="Eyes to the Wind"
          />
          <div className="favorite-item-details-container">
            <div className="favorite-product-title-brand-container">
              <p className="favorite-product-title ">Eyes to the Wind</p>
              <p className="favorite-product-brand ">by Ady Barkan</p>
            </div>
            <div className="total-price-remove-container">
              <p className="favorite-book-status-text ">
                Status: <span className="favorite-book-status">Read</span>
              </p>
              <button className="remove-button " type="button">
                Remove
              </button>
            </div>
          </div>
          <button className="delete-button" type="button" testid="remove">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              color="#616E7C"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(97, 110, 124)" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
            </svg>
          </button>
        </li>
      </a>
      <a
        className="favorite-book-item-nav-link"
        href="/books/1c9201d5-ffa9-4750-ad92-a5ce6009a747"
      >
        <li className="favorite-item ">
          <img
            className="favorite-product-image"
            src="https://assets.ccbp.in/frontend/react-js/harry-potter-book.png"
            alt="Harry Porter"
          />
          <div className="favorite-item-details-container">
            <div className="favorite-product-title-brand-container">
              <p className="favorite-product-title ">Harry Porter</p>
              <p className="favorite-product-brand ">by J. K. Rowling</p>
            </div>
            <div className="total-price-remove-container">
              <p className="favorite-book-status-text ">
                Status:{" "}
                <span className="favorite-book-status">Currently Reading</span>
              </p>
              <button className="remove-button " type="button">
                Remove
              </button>
            </div>
          </div>
          <button className="delete-button" type="button" testid="remove">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              color="#616E7C"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(97, 110, 124)" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
            </svg>
          </button>
        </li>
      </a>
    </ul>
  </div>
</div>

    
    </>
  )
}
