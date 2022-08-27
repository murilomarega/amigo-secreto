import React, { FC } from "react";
import "./styles.css";

const Card: FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
