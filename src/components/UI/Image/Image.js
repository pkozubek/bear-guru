import React, { Component, Fragment } from "react";
import Spinner from "../spinner/spinner";

class Image extends Component {
  state = {
    isLoaded: false
  };

  render() {
    const imageStyle = this.state.isLoaded
      ? { display: "block" }
      : { display: "none" };

    return (
      <Fragment>
        <Spinner isVisible={!this.state.isLoaded} />
        <img
          alt={this.props.alt}
          src={this.props.src}
          style={{ ...imageStyle, margin: "0 auto" }}
          onLoad={() => this.setState({ isLoaded: true })}
        />
      </Fragment>
    );
  }
}

export default Image;
