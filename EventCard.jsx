import * as React from "react";

export function EventCard({ image, title, date, location }) {
  return (
    <div className="flex flex-col py-0.5">
      <img
        loading="lazy"
        src={image}
        alt={`Event image for ${title}`}
        className="object-contain rounded-xl aspect-[0.9] w-[148px]"
      />
      <div className="mt-3 text-xl font-semibold">{title}</div>
      <div className="self-start mt-1.5">{date}</div>
      <div className="self-start mt-2">{location}</div>
    </div>
  );
}