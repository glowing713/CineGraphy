import React from "react";
import PropTypes from "prop-types";

// Component가 state가 필요 없는 경우 class 일 필요는 없다.
function Movie({ id, title, year, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
