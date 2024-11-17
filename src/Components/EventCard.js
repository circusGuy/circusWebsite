import getEvents from './Backend/API';
import Checkout from "./Frontend/Checkout";

function App() {
  let r = Checkout();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getEvents}>Click me</button>
        <div id="events"></div>
      </header>
    {r}
     
    </div>
  );
}

export default App;
