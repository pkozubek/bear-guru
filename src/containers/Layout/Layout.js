import React, { Component, Fragment } from "react";
import DesktopMenu from "../../components/Navigation/desktopMenu/desktopMenu";
import MobileMenu from "../../components/Navigation/mobileMenu/mobileMenu";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <DesktopMenu />
        <MobileMenu />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Layout;
