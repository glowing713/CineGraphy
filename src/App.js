import React from "react";
import PropTypes from "prop-types";

const favoriteFoods = [
  { id: 1, name: "pizza", rating: 4.2 },
  { id: 2, name: "ramen", rating: 3.9 },
  { id: 3, name: "hamburger", rating: 4.4 },
  { id: 4, name: "chicken", rating: 4.1 },
  { id: 5, name: "french fries", rating: 5.0 },
];

// props에서 name만 사용함
function Food({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

// prop의 type을 정의해서 올바르게 전달받았는지를 체크할 수 있다.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {favoriteFoods.map((food) => (
        <Food key={food.id} name={food.name} rating={food.rating} />
      ))}
    </div>
  );
}

export default App;
