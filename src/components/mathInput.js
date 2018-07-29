import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";
import MathKeyboard from "components/mathKeyboard";

class MathInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <div className="mathInput">
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="69"
          type="number"
          value={this.state.input}
        />
        <MathKeyboard />
      </div>
    );
  }

  handleChange = event => {
    this.setState({input: event.target.value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13 && this.state.input !== "") {
      this.props.handleInputSubmit(this.state.input);
      this.setState({input: ""});
    }
  };
};

export default connect(null, actions)(MathInput);
