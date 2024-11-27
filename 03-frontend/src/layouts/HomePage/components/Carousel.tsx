
import { Link } from "react-router-dom";
import BookModel from "../../../models/BookModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { ReturnBook } from "./ReturnBook";
import { useEffect, useState } from "react";

export const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async() => {
      const loadedBooks: BookModel[] = [];

      const baseUrl: string = "http://localhost:8080/api/books";
      
      const url = `${baseUrl}?page=0&size=9`

      const response = await fetch(url);

      if(!response.ok){
        throw new Error("Something went wrong")
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.books;

      for( const key in responseData){
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img
        })
      }
      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error:any) => {
      setIsLoading(false);
      setHttpError(error.message);
    })
  }, []);

if(isLoading){
  return(
    <SpinnerLoading/>
  );
}

if(httpError){
  return(
    <div className="container m-5">
      <p>{httpError}</p>
    </div>
  );
}

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
              {books.slice(0, 3).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(3, 6).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(6, 9).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
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
        {books[7] ? (
          <ReturnBook book={books[7]} key={books[7].id} />
        ) : (
          <p>No books available for mobile view.</p>
        )}
      </div>

      {/* View More Button */}
      <div className="homepage-carousel-title mt-3">
        <Link className="btn btn-outline-dark btn-lg" to={"/search"}>
          View more
        </Link>
      </div>
    </div>
  );
};
