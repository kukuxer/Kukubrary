class ReviewModel {
  id: number;
  userEmail: string;
  date: string;
  rating: number;
  book_id?: number;
  reviewDescription: string;


  constructor(id: number,
    userEmail: string,
    date: string,
    rating: number,
    book_id: number,
    reviewDescription: string
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.reviewDescription = reviewDescription;
    this.date = date;
    this.rating = rating;
  }
}
export default ReviewModel;