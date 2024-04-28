import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
  return (
    <div>
      <h1>This is a Content</h1>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
          ></HoverCounter>
        )}
      </Counter>
    </div>
  );
}
