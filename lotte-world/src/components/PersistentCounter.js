import React, { useState, useEffect } from "react";

const PersistentCounter = () => {
  const [count, setCount] = useState(
    () => JSON.parse(window.localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return;
  <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default PersistentCounter;
