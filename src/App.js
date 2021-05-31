import React from "react";

function Food({ best }) {
  return <h1>I like {best}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food best="pizza" />
      <Food best="ramen" />
      <Food best="hamburger" />
      <Food best="chicken" />
      <Food best="french fries" />
    </div>
  );
}

export default App;
