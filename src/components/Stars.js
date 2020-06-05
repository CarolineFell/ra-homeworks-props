import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

export default function Stars(props) {
  const { count } = props;
  if (count < 1 || count > 5 || !Number(count)) {
    return null;
  }

  const listStars = [];
  for (let i = 0; i < count; i += 1) {
    listStars.push(1);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      Total {listStars.length} star(s):
      {listStars.map(id => (<li key={id}> {" "} <Star /> </li>))}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
};