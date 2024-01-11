import { React, useRef, useState, useEffect } from "react";

export default function Player(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      props.setIdOnPlay(props.id);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    if (props.id != props.idOnPlay) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [props.idOnPlay]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <video className="m-2 p-1 rounded-md" src={props.src} ref={audioRef} loop playsInline muted />
        <button
          className="mr-4 rounded-lg bg-purple-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={togglePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
