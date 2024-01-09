import UserClass from "./Userclass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-section">
        <h1>About</h1>
        <h1 className="description">This is basically a food delivering app.</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
