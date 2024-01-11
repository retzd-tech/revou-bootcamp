import { useState } from "react";

import GreetingComponent from "./components/Greeting/Greeting.component";
import "./App.css";

function App() {
  const [balanceAccountA] = useState(0);
  const [balanceAccountB] = useState(450000);
  const [balanceAccountC] = useState(300000);

  return (
    <div className="App">
      <header className="App-header">
        <GreetingComponent bankAccount={"A"} balance={balanceAccountA} />
        <GreetingComponent bankAccount={"B"} balance={balanceAccountB} />
        <GreetingComponent bankAccount={"C"} balance={balanceAccountC} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
