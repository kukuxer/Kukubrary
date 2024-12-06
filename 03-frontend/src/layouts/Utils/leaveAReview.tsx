import React, { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview:  any }> = (props) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");

  // Handles the user's rating when they click
  const handleStarClick = (value: number) => {
    setSelectedStars(value);
    setDisplayInput(true);
  };

  // Handles the star highlighting on hover
  const handleStarHover = (value: number) => {
    setHoveredStars(value);
    setSelectedStars(value);
  };

  const resetHover = () => {
    setHoveredStars(0);
  };

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <h5>Leave a review:</h5>

      {/* Stars display and selection */}
      <div
        style={{
          display: "flex",
          gap: "5px",
          cursor: "pointer",
          fontSize: "2rem",
        }}
      >
        {/* Render stars for hover and selection */}
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleStarClick(value)}
            onMouseEnter={() => handleStarHover(value)}
            onMouseLeave={resetHover}
            style={{
              color:
                value <= (hoveredStars || selectedStars)
                  ? "#ffc107"
                  : "#e4e5e9",
              transition: "color 0.2s",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Dropdown for selecting a specific rating */}
      <h5
        className="dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        Leave a review?
      </h5>

      <ul
        id="submitReviewRating"
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
          <li key={value}>
            <button
              onClick={() => handleStarClick(value)}
              className="dropdown-item"
            >
              {value} star{value !== 1 ? "s" : ""}
            </button>
          </li>
        ))}
      </ul>

      {/* Show selected rating visually using StarsReview component */}
      <StarsReview rating={selectedStars} size={32} />
      {displayInput && (
        <form method="POST" action="#">
          <hr />
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="SubmitReviewDescription"
              placeholder="Optional"
              rows={3}
              onChange={(e) => setReviewDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="button" onClick={() => props.submitReview(selectedStars, reviewDescription)} className="btn btn-primary mt-3">
              Submit Review
            </button>
          </div>
        </form>
      )}

      {/* Display selected rating */}
      <p>Your rating: {selectedStars} star(s)</p>
    </div>
  );
};
// return (
//   <div className="dropdown" style={{ cursor: "pointer" }}>
//     <h5
//       className="dropdown-toggle"
//       id="dropdownMenuButton1"
//       data-bs-toggle="dropdown"
//     >
//       Leave a review?
//     </h5>
//     <ul
//       id="submitReviewRating"
//       className="dropdown-menu"
//       aria-labelledby="dropdownMenuButton1"
//     >
//       <li> <button onClick={() => starValue(0)} className="dropdown-item">) 0 star</button></li>
//       <li> <button onClick={() => starValue(0.5)} className="dropdown-item">) 0.5 star</button></li>
//       <li> <button onClick={() => starValue(1)} className="dropdown-item">) 1 star</button></li>
//       <li> <button onClick={() => starValue(1.5)} className="dropdown-item">) 1.5 star</button></li>
//       <li> <button onClick={() => starValue(2)} className="dropdown-item">) 2 star</button></li>
//       <li> <button onClick={() => starValue(2.5)} className="dropdown-item">) 2.5 star</button></li>
//       <li> <button onClick={() => starValue(3)} className="dropdown-item">) 3 star</button></li>
//       <li> <button onClick={() => starValue(3.5)} className="dropdown-item">) 3.5 star</button></li>
//       <li> <button onClick={() => starValue(4)} className="dropdown-item">) 4 star</button></li>
//       <li> <button onClick={() => starValue(4.5)} className="dropdown-item">) 4.5 star</button></li>
//       <li> <button onClick={() => starValue(5)} className="dropdown-item">) 5 star</button></li>
//     </ul>
//     <StarsReview rating={starInput} size={32} />
//   </div>
// );
