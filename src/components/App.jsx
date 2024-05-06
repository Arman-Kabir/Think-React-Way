import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import Section from "./Section";
import ThemeContext from "./contexts/themeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };

  switchTheme = () => {
    this.setState((theme) => {
      if (theme === "dark") {
        return {
          theme: "light",
        };
      } else {
        return {
          theme: "dark",
        };
      }
    });
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

          <ThemeContext.Provider
            value={{ theme: theme, switchTheme: this.switchTheme }}
          >
            <Section></Section>
          </ThemeContext.Provider>
        </div>
      </>
    );
  }
}
