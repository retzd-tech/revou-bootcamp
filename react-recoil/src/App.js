import { RecoilRoot } from "recoil";

import "./App.css";
import CharacterCounter from "./CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;
