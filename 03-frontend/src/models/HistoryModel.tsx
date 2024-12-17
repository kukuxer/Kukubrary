class HistoryModel {
  id: number;
  title: string;
  author: string;
  description: string;
  checkoutDate: string;
  returnedDate: string;
  userEmail: string;
  img: string;

  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    checkoutDate: string,
    returnedDate: string,
    userEmail: string,
    img: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.checkoutDate = checkoutDate;
    this.returnedDate = returnedDate;
    this.userEmail = userEmail;
    this.img = img;
  }
}
export default HistoryModel;
