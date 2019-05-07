import * as React from "react";
import ElementChanges from "./elementChanges";
import TextChanges from "./textChanges";
import PropsChangeParent from "./propsChange-parent";

class RenderTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true
    };
  }

  toggle = () => {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h1>Render Test</h1>
        <button onClick={this.toggle}>Toggle Props</button>
        <ElementChanges toggle={this.state.toggle} />
        <TextChanges toggle={this.state.toggle} />
        <PropsChangeParent toggle={this.state.toggle} />
      </React.Fragment>
    );
  }
}

export default RenderTest;
