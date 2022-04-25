import React from "react";

// import starimage from "/images/rating.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {/* Conditional rendering text hardcoded way */}
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}

      {/* Conditional rendering dynamic way using JS logic */}
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img
        className="card--image"
        src={`/images/${props.img}`}
        alt="cardimage"
      ></img>
      <div className="card--stats">
        <img className="card--star" src="/images/rating.png" alt="rating"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From €{props.price}</span> / person
      </p>
    </div>
  );
}
