import * as React from "react";
import PropsChangeChild from "./propsChange-child";

class PropsChangeParent extends React.Component {
  componentDidMount() {
    console.log("Props Change Parent Mounted");
  }
  componentDidUpdate() {
    console.log("Props Change Parent Updated");
  }
  render() {
    console.log("Props Change Parent Rendered");
    return (
      <div>
        <h2>Props Change</h2>
        <PropsChangeChild toggle={this.props.toggle} />
      </div>
    );
  }
}

export default PropsChangeParent;
