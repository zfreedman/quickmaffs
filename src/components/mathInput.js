import React from "react";

export default class MathInput extends React.Component {
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
          placeholder="69"
          type="number"
          value={this.state.input}
        />
      </div>
    );
  }

  handleChange = event => {
    this.setState({input: event.target.value});
  };
};
