import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, cover, id }) {
  return (
    <div className="flex flex-col gap-2 my-6">
      <Link to={`/tracks/${id}`}>
        <span className="max-w-full relative">
          <img className="rounded" src={cover} alt="" />
        </span>
      </Link>
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl text-left">{title}</h1>
      </div>
    </div>
  );
}
