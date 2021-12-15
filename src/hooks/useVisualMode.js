import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(change, replace = false) {
    if (replace) {
      history.pop();
    }
    setMode(change);
    setHistory([...history, change]);
  }

  function back() {
    if (history.length > 1) {
      history.pop();
    }
    setMode(history[history.length - 1]);
  }
  return { mode, transition, back };
}
