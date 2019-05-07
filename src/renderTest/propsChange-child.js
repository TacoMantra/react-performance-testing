import * as React from "react";

class PropsChangeChild extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.toggle ? "foo" : "bar"}</div>
      </React.Fragment>
    );
  }
}

export default PropsChangeChild;
