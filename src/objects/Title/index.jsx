import React from "react";

const Title = ({ level, children }) => {
  return level === 1 ? (
    <h1>{children}</h1>
  ) : level === 2 ? (
    <h2>{children}</h2>
  ) : (
    <h3>{children}</h3>
  );
};

export default Title;
