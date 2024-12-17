class MessageModel {
  id?: number;
  title: string;
  userEmail?: string;
  adminEmail?: string;
  question: string;
  response?: string;
  closed?: boolean;

  constructor(
    title: string,
    question: string
  ) {
    this.title = title;
    this.question = question;
  }
}
export default MessageModel;
