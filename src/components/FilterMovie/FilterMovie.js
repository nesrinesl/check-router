import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-stars";

const FilterMovie = ({ setNewRate, newRate,setInputSearch }) => {
  const reset = () => {
    setInputSearch("");
    setNewRate(null);
  };

  return (
    <div style={{ margin: 50,display:"flex",justifyContent:"space-between"}}>
      <ReactStars 
        count={5}
        size={40}
        half={false}
        value={newRate}
        onChange={(rate) => setNewRate(rate)}
      />
      <Button onClick={reset} variant="outline-light">
        RESET
      </Button>{" "}
    </div>
  );
};

export default FilterMovie;
