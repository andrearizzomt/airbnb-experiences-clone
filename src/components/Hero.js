import React from "react";
// import herogroupphoto from "/images/group.png";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero--photo"
        src="/images/group.png"
        alt="herogroupphoto"
      ></img>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activies led by one-of-a-kind hosts-all without
        leaving home.
      </p>
    </section>
  );
}
