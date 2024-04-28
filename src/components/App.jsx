import ClickCounter from "./ClickCounter";

import Counter from "./Counter";
import Section from "./Section";

function App() {
  return (
    <>
      <div className="app">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter>
          )}
        </Counter>

        <Section></Section>

      </div>
    </>
  );
}

export default App;
