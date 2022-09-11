import React from "react";
import "./Banner.css";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import { Button } from "@mui/material";
import { useState } from "react";

function Banner(props) {
  const [searchState, setSearchState] = useState(false);
  return (
    <div className="banner">
      <h1>
        CAD 12.88 &#183; <span>Hr</span>
      </h1>
      <div className="banner-center">
        {!searchState ? (
          <>
            <MoreTimeIcon />
            <h1>
              24/7 &#183; <span>Book Fast - Typically Busy</span>
            </h1>
          </>
        ) : (
          <h1>Select Dates and Times Below</h1>
        )}
      </div>
      <Button
        onClick={() => {
          setTimeout(() => {
            props.showBooking();
            setSearchState(!searchState);
          }, 50);
        }}
      >
        {!searchState ? "Book Now" : "Back to Listing"}
      </Button>
    </div>
  );
}

export default Banner;
