// ComponentA.js
import React, { Suspense, lazy } from "react";
// import ComponentB from "./ComponentB"; // Non lazy loading

const ComponentB = lazy(() => import("./ComponentB")); // Lazy loading
const LazyImageComponent = () => {
  return (
    <div>
      <p>This is an image component</p>
      <img src="logo.svg" alt="Lazy loaded asset" loading="lazy" />
    </div>
  );
};

const ComponentA = () => {
  return (
    <div>
      <LazyImageComponent />
      <p>This is Component A</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentB />
      </Suspense>
    </div>
  );
};

export default ComponentA;
