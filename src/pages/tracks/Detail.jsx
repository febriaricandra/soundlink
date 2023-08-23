import React from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import music from "../../service/data.json";
import { Play } from "lucide-react";

export default function Detail() {
  const { id } = useParams();
  const track = music.data.find((track) => track.id === parseInt(id));
  if (!track) return <div>Track not found</div>;

  return (
    <div>
      <div className="flex flex-col gap-2 my-6">
        <span className="max-w-full relative">
          <img className="rounded" src={track.cover} alt="" />
        </span>
      </div>
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl text-left">{track.title}</h1>
      </div>
      <div className="flex flex-col gap-6 w-full my-4">
        {track.tracks.map((track, index) => (
          <List key={index} title={track.title} artist={track.artist} audio={track.audio} />
        ))}
      </div>
    </div>
  );
}
