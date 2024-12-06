import * as React from "react";

export function StartButton() {
  return (
    <button 
      className="gap-2.5 self-start py-3.5 pr-20 pl-20 mt-3.5 bg-rose-500 rounded min-h-[55px]"
      tabIndex={0}
      aria-label="Começar"
    >
      COMEÇAR
    </button>
  );
}