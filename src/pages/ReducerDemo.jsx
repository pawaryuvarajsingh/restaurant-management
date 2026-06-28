import { useReducer } from "react";

const initialState = { tables: 10 };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { tables: state.tables + 1 };

    case "REMOVE":
      return { tables: state.tables - 1 };

    default:
      return state;
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Restaurant Tables</h1>

      <h2>Available Tables: {state.tables}</h2>

      <button onClick={() => dispatch({ type: "ADD" })}>
        Add Table
      </button>

      <button onClick={() => dispatch({ type: "REMOVE" })}>
        Remove Table
      </button>
    </div>
  );
}

export default ReducerDemo;