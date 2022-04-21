import React from "react";

import starimage from "../images/rating.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.img} alt="cardimage"></img>
      <div className="card--stats">
        <img className="card--star" src={starimage} alt="rating"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From €{props.price}</span> / person{" "}
      </p>
    </div>
  );
}
