import React from "react";

export default class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount=()=>{
    this.setState((prevState)=>({
        count:prevState.count+1
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button type="button" onClick={this.incrementCount}>Click {count} times</button>
      </div>
    );
  }
}