import withCounter from "./HOC/withCounter";

const ClickCounter = ( props ) => {
  const { count, incrementCount } = props;
  return (
    <div>
        <h1 type="button" onMouseOver={incrementCount}>
          Hovered {count} times
        </h1>
      </div>
  );
};

export default withCounter(ClickCounter);
