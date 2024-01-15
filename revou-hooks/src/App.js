import { useState } from "react";

import "./App.css";
import UseCallbackComponent from "./Hooks/useCallback";
import UseEffectComponent from "./Hooks/useEffect";
import UseMemoComponent from "./Hooks/useMemo";
import UseRefComponent from "./Hooks/useRef";
import UseRefComponent from "./Hooks/us";

const App = () => {
  const [activeHooks, setActiveHooks] = useState("");

  return (
    <div className="App">
      <button onClick={() => setActiveHooks("")}>Lepas Komponen</button>
      <button onClick={() => setActiveHooks("useEffect")}>useEffect</button>
      <button onClick={() => setActiveHooks("useMemo")}>useMemo</button>
      <button onClick={() => setActiveHooks("useCallback")}>useCallback</button>
      <button onClick={() => setActiveHooks("useRef")}>useRef</button>

      {activeHooks === "useCallback" && <UseCallbackComponent />}
      <hr />
      {activeHooks === "useEffect" && <UseEffectComponent />}
      <hr />
      {activeHooks === "useMemo" && <UseMemoComponent />}
      <hr />
      {activeHooks === "useRef" && <UseRefComponent />}
      <hr />
    </div>
  );
};

export default App;
