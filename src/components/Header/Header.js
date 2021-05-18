//import modules
import { Component } from "react";
//import style
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">{this.props.children}</div>
      </header>
    );
  }
}

export { Header };
