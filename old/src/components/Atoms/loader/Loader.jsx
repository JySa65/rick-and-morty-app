import React from "react";
import "./style.scss";

const Loader = props => {
  if (!props.loader) return null;
  return (
    <div className="lds-facebook">
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
