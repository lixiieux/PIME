import * as React from "react";

export function NavigationItem({ icon, label, isActive }) {
  return (
    <div className="flex flex-col text-xs text-center whitespace-nowrap" role="button" tabIndex={0}>
      <img
        loading="lazy"
        src={icon}
        alt={`${label} icon`}
        className={`object-contain aspect-square w-[25px] ${isActive ? 'fill-red-700' : ''}`}
      />
      <div className={`mt-1 ${isActive ? 'text-red-700' : 'text-zinc-400'}`}>{label}</div>
    </div>
  );
}