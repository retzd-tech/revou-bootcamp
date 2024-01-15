import React, { useMemo, useEffect } from "react";

const FibonacciComponent = () => {
  useEffect(() => {
    // Measure time with memoization
    const startWithMemo = Date.now();
    setTimeout(() => {
        fibMemo(32);
        const endWithMemo = Date.now();
        const timeWithMemo = endWithMemo - startWithMemo - 500;
        console.log(`With memo Hook ${timeWithMemo} ms`);
    }, 500);

    // Measure time without memoization
    // const startWithoutMemo = Date.now();
    // setTimeout(() => {
    //   fib(32);
    //   const endWithoutMemo = Date.now();
    //   const timeWithoutMemo = endWithoutMemo - startWithoutMemo - 500;
    //   console.log(`Without memo Hook ${timeWithoutMemo} ms`);
    // }, 500);
  }, []);
  
  // Without Memoization
  const fib = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  };

  // With Memoization using useMemo
  const fibMemo = useMemo(() => {
    const memo = {};
    return (n) => {
      if (n <= 1) {
        return n;
      } else if (!(n in memo)) {
        memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
      }
      return memo[n];
    };
  }, []);

  return (
    <div>
      {/* <p>Time without memoization: {timeWithoutMemo} ms</p>
            <p>Time with memoization: {timeWithMemo} ms</p> */}
            <p>Check console for useMemo example</p>
    </div>
  );
};

export default FibonacciComponent;
