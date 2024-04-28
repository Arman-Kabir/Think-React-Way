import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content({theme}) {
  return (
    <div>
      <h1>This is a Content</h1>

      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
          ></HoverCounter>
        )}
      </Counter>
    </div>
  );
}