import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "../../components/Organisms/card";
import Loader from "../../components/Atoms/loader";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loader: true,
      nextPage: 1
    };
  }

  async handleGetListCharacter() {
    this.setState({
      loader: true
    });
    const data = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
    );
    if (data.status == 200) {
      const numberPage = data.data.info.next.split("?page=")[1];
      this.setState({
        data: [].concat(this.state.data, data.data.results),
        loader: false,
        nextPage: numberPage
      });
    }
  }

  componentDidMount() {
    this.handleGetListCharacter();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          {this.state.data.map(data => {
            return (
              <div className="col s3" key={data.id}>
                <Card data={data} />
              </div>
            );
          })}
        </div>

        {!this.state.loader && (
          <div className="center-align" style={{ margin: "30px" }}>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer"
              }}
            >
              <h6
                className="white-text text-darken-2"
                onClick={e => this.handleGetListCharacter()}
              >
                Load More
              </h6>
            </button>
          </div>
        )}
        {this.state.loader && (
          <div className="center-align">
            <Loader loader={this.state.loader} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Homepage;
