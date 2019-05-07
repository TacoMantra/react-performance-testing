import * as React from "react";

class ElementChanges extends React.Component {
  componentDidMount() {
    console.log("Element Changes Mounted");
  }
  componentDidUpdate() {
    console.log("Element Changes Updated");
  }
  render() {
    console.log("Element Changes Rendered");
    return (
      <div>
        <h2>Element Changes</h2>
        {this.props.toggle ? (
          <div>Hello World</div>
        ) : (
          <section>Hello World</section>
        )}
      </div>
    );
  }
}

export default ElementChanges;
