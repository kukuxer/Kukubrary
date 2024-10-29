import React from "react";

export const ReturnBook:React.FC<{imageSrc:string,title:string}> = (props) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img 
          src={props.imageSrc}
          alt="Book Cover"
          width={151}
          height={233}
        />
        <h6 className="mt-2">{props.title}</h6>
        <p>Kukubrary</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
