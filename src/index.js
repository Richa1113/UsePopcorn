import React from "react";
//import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating onSetMovieRating={setMovieRating} />
//       <p>This movie was rated {movieRating} star</p>;
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxlength={7}
      size={48}
      color="blue"
      // message={["Terrible", "Bad", "Okay", "Good", "Awesome", "**", "***"]}
      message={["*", "**", "***", "****", "*****", "******", "*******"]}
    />
    <StarRating maxlength={7} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
