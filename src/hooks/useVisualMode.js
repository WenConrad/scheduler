import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(change) {
    setHistory([[...history], mode]);
    setMode(change);
  }

  function back() {
    if (history.length === 2) {
      setMode(history[1]);
      setHistory(history[0]);
    }
  }

  return { mode, transition, back };
}
