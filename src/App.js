import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card
        img="swimmer.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
