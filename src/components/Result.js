import React from "react";
import { useSelector } from "react-redux";

function Result(props) {
  let data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div>
      <h2>update Component from redux</h2>
      <p>Component1 : {data.comp1}</p>

      <p>Component2 : {data.comp2}</p>
    </div>
  );
}

export default Result;
