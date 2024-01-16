import React, { useState, useEffect } from "react";

import Internalization from "./Internalization/App";
import KeyList from "./KeyList/KeyList";
import DirectDOM from "./DirectDOM/DirectDOM";
import LazyLoading from "./LazyLoading/LazyLoading";
import FibonacciComponent from "./MemoHook/Memo";
import MemoComponent from "./MemoComponent/MemoComponent";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("Learn React");
  const [chapterCount, setChapterCount] = useState(1);

  useEffect(() => {
    const newTitle = `Learn React Chapter ${chapterCount}`;
    setTitle(newTitle);
  }, [chapterCount]);

  return (
    <div className="App">
      <Internalization />
      
      <p>{title}</p>
      <button
        onClick={() => {
          setChapterCount(chapterCount + 1);
          const newTitle = `Learn React Chapter ${chapterCount}`;
          setTitle(newTitle);
        }}
      >
        Click to update
      </button>

      {/* <FibonacciComponent/> */}
      {/* <MemoComponent /> */}
      {/* <KeyList/> */}
      {/* <DirectDOM/> */}
      {/* <LazyLoading/> */}
    </div>
  );
};

export default App;
