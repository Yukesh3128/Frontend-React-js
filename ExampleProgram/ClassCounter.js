import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>{this.props.title}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>➕ Add</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClassCounter;
