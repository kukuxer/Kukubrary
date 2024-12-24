class AddBookRequest{
  title: string;
  author:string;
  description:string;
  category:string;
  img?:string;
  copies:number;

  constructor(title: string,
    author:string,
    description:string,
    category:string,
    copies:number){
      this.title = title;
      this.author = author;
      this.description = description;
      this.category = category;
      this.copies = copies;
    }
}
export default AddBookRequest;