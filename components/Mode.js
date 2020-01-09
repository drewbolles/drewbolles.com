import React, { useState, useEffect } from "react";

export const ModeContext = React.createContext();

const __LOCAL_STORAGE_KEY__ = "drewbolles.com:mode";

function getLocalMode() {
  try {
    return JSON.parse(window.localStorage.getItem(__LOCAL_STORAGE_KEY__));
  } catch (e) {
    // error...
  }
}

function ModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      const localMode = getLocalMode();
      return localMode || "light";
    } catch (e) {
      return "light";
    }
  });

  const toggleMode = () =>
    setMode(m => {
      const nextMode = m === "light" ? "dark" : "light";
      window.localStorage.setItem(
        __LOCAL_STORAGE_KEY__,
        JSON.stringify(nextMode),
      );
      return nextMode;
    });

  useEffect(() => {
    try {
      const localMode = getLocalMode();
      if (localMode && mode !== localMode) setMode(localMode);
    } catch (e) {
      // error...
    }
  });
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export default ModeProvider;
