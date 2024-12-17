import ShelfCurrentLoans from "../../../models/ShelfCurrentLoans";

export const LoansModal: React.FC<{
  shelfcurrentLoan: ShelfCurrentLoans;
  mobile: boolean;
  returnBook: any
  renewBook: any
}> = (props) => {
  return (
    <div
      className="modal fade"
      id={
        props.mobile
          ? `mobilemodal${props.shelfcurrentLoan.book.id}`
          : `modal${props.shelfcurrentLoan.book.id}`
      }
      data-bs-bakdrop="startic"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      key={props.shelfcurrentLoan.book.id}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Loan Options
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="mt-3">
                <div className="row">
                  <div className="col-2">
                    {props.shelfcurrentLoan.book.img ? (
                      <img
                        src={props.shelfcurrentLoan.book?.img}
                        width={56}
                        height={87}
                        alt="book"
                      />
                    ) : (
                      <img
                        src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
                        width={56}
                        height={87}
                        alt="book"
                      />
                    )}
                  </div>
                  <div className="col-10">
                    <h6>{props.shelfcurrentLoan.book.author}</h6>
                    <h4>{props.shelfcurrentLoan.book.title}</h4>
                  </div>
                </div>
                <hr />
                {props.shelfcurrentLoan.daysLeft > 0 && (
                  <p className="text-secondary">
                    Due in {props.shelfcurrentLoan.daysLeft} days.
                  </p>
                )}
                {props.shelfcurrentLoan.daysLeft === 0 && (
                  <p className="text-success"> Due today.</p>
                )}
                {props.shelfcurrentLoan.daysLeft < 0 && (
                  <p className="text-danger">
                    Past due by {props.shelfcurrentLoan.daysLeft} days.
                  </p>
                )}
                <div className="list-group mt-3">
                  <button onClick={() => props.returnBook(props.shelfcurrentLoan.book.id)} data-bs-dismiss="modal" className="list-group-item list-group-item-action"
                  aria-current='true'>
                    Return book
                  </button>
                  <button onClick={() => props.renewBook(props.shelfcurrentLoan.book.id)} data-bs-dismiss='modal' className={props.shelfcurrentLoan.daysLeft<0 ?
                    'list-group-item list-group-item-action inactiveLink' :
                    'list-group-item list-group-item-action '
                  }>
                    {props.shelfcurrentLoan.daysLeft < 0 ?
                    'Late dues cannot be renewed' :
                    'Renew loan for 7 days'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
