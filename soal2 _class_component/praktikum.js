class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  reduce = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.reduce}>-1</button>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
