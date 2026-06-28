import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef Example</h1>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter food name"
      />

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRefDemo;