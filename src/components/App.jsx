import React from "react";
import ClickCounter from "./ClickCounter";

import Counter from "./Counter";
import Section from "./Section";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;

    return (
      <>
        <div className="app">
          <Counter>
            {(counter, incrementCount) => (
              <ClickCounter
                count={counter}
                incrementCount={incrementCount}
              ></ClickCounter>
            )}
          </Counter>

          <Section theme={theme}></Section>
        </div>
      </>
    );
  }
}
