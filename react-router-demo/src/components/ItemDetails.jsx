import React, { Component } from "react";

const ItemDetails = ({ match }) => {
  return (
    <div>
      <h2> Item Details </h2>
      <h2> Item ID : {match.params.id} </h2>
    </div>
  );
};

export default ItemDetails;
