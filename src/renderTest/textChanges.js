import * as React from "react";

class TextChanges extends React.Component {
  componentDidMount() {
    console.log("Text Changes Mounted");
  }
  componentDidUpdate() {
    console.log("Text Changes Updated");
  }
  render() {
    console.log("Text Changes Rendered");
    return (
      <div>
        <h2>Text Changes</h2>
        <div>{this.props.toggle ? "foo" : "bar"}</div>
      </div>
    );
  }
}

export default TextChanges;
