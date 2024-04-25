import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import User from "./User";
import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="app">
      
        <Counter
          render={(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter>
          )}
        ></Counter>

        <Counter
          render={(count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
            ></HoverCounter>
          )}
        ></Counter>
      </div>
    </>
  );
}

export default App;
