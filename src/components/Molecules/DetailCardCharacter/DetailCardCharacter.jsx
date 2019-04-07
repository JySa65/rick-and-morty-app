import React from "react";
import Modal from "../../Atoms/modal";

const DetailCard = props => {
  return (
    <Modal isOpen={props.isOpen}>
      <div className="center-align">
        <div className="row valign-wrapper">
          <div className="col s12">
            <img
              src={props.data.image}
              alt={props.data.name}
              className="circle responsive-img"
            />
          </div>
          <div className="col s12">
            <h3>{props.data.name}</h3>
          </div>
        </div>
      </div>
          <div style={{ marginLeft:  "30px" }}>
        <ul>
          <li>
            <h6>Gender: {props.data.gender}</h6>
          </li>
          <li>
            <h6>Status: {props.data.status}</h6>
          </li>
          <li>
            <h6>Species: {props.data.species}</h6>
          </li>
          <li>
            <h6>Origin: {props.data.origin.name}</h6>
          </li>
          <li>
            <h6>Location: {props.data.location.name}</h6>
          </li>
          <li>
            <h6>Episode: {props.data.episode.length}</h6>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default DetailCard;
