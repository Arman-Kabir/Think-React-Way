import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import User from "./User";

function App() {
  return (
    <>
      <div className="app">
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
        <User render={(isLoggedIn) => (isLoggedIn ? "sumit" : "guest")}></User>
      </div>
    </>
  );
}

export default App;
