import React, { Component } from "react";
import DetailCardCharacter from "../../Molecules/DetailCardCharacter";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardToggle: false
    };
  }

  handleCardToggle(e) {
    e.preventDefault();
    this.setState({
      cardToggle: !this.state.cardToggle
    });
  }

  render() {
    return (
      <a href="#" onClick={e => this.handleCardToggle(e)}>
        <div className="card card-radius">
          <div className="card-image">
            <img src={this.props.data.image} className="img-radius" />
            <span
              className="card-title"
              style={{
                width: "100%",
                background: "#1b12128c",
                padding: "10px"
              }}
            >
              {this.props.data.name}
              <label>
                <input type="radio" defaultChecked className="red darken-4" />
                <span
                  style={{ margin: "0px 0px -7px 7px" }}
                  className={
                    this.props.data.status == "Alive" ? "live" : "dead"
                  }
                  title={this.props.data.status}
                />
              </label>
            </span>
          </div>
          <div className="card-content">
            <div className="box-border">
              <span>
                <b>Gender</b>
              </span>
              <span>
                <b>{this.props.data.gender}</b>
              </span>
            </div>

            <div className="box-border">
              <span>
                <b>Species</b>
              </span>
              <span>
                <b>{this.props.data.species}</b>
              </span>
            </div>
            <DetailCardCharacter
              isOpen={this.state.cardToggle}
              data={this.props.data}
            />
          </div>
        </div>
      </a>
    );
  }
}
export default Card;
