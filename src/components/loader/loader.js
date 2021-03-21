import React from "react";

const Loader = () => {
  return (
    <>
      {/* <div class="loader-container">
        <div class="loader">Loading...</div>
      </div> */}
      <div className="loader2-container">
        <svg
          className="spinner"
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="path"
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    </>
  );
};

export default Loader;
