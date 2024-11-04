

import bookCover1 from "./../../../Images/BooksImages/book-luv2code-1000.png";
import bookCover2 from "./../../../Images/BooksImages/new-book-1.png";
import bookCover3 from "./../../../Images/BooksImages/new-book-2.png";
import { ReturnBook } from "./ReturnBook";

export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Discover Your Next Stayed-Up-All-Night Programming Book</h3>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-ride="carousel"
        data-bs-interval={5000}
      >
        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook
                imageSrc={bookCover1}
                title="Crash Course in Python"
              />    
              <ReturnBook
                imageSrc={bookCover2}
                title="Advanced Teqchiques in C#"
              />  
              <ReturnBook
                imageSrc={bookCover3}
                title=" The Expert Guide to Machine Learning"
              />        
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
            <ReturnBook
                imageSrc={bookCover2}
                title="Advanced Teqchiques in C#"
              />  
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook
                imageSrc={bookCover3}
                title=" The Expert Guide to Machine Learning"
              />
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile View */}
      <div className="d-lg-none mt-3">
        {/* <div className="row d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img
              src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
              alt="Book cover"
              width={151}
              height={233}
            />
            <h6 className="mt-2">
              <b>Book</b>
            </h6>
            <p>Kukubrary</p>
            <a className="btn main-color text-white" href="#">
              Reserve
            </a>
          </div>
        </div> */}
        <ReturnBook
                imageSrc={bookCover1}
                title="Crash Course in Python"
              />    
      </div>

      {/* View More Button */}
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-dark btn-lg" href="#">
          View more
        </a>
      </div>
    </div>
  );
};
