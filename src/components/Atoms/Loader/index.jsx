import React from "react";
import "./style.css";

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