/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoItem {
  index: number;
  title: string;
  video: string;
  thumbnail: string;
}

interface VideoPlayerProps {
  item: VideoItem | null;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ item, className = "" }) => {
  const [playing, setPlaying] = useState(false);

  if (!item) {
    return (
      <div
        className={`relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden ${className}`}
      >
        <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 animate-pulse" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video bg-black rounded-xl overflow-hidden ${className}`}
    >
      {/* Thumbnail - direct load from public folder */}
      {!playing && (
        <>
          <img
            src={item.thumbnail}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          {/* Play button overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            <div className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/80 transition-all duration-300 shadow-2xl">
              <svg
                className="w-10 h-10 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* Video Player */}
      {playing && (
        <ReactPlayer
          src={item.video}
          playing={true}
          width="100%"
          height="100%"
          controls={true}
          className="absolute inset-0"
          style={{
            display: playing ? "block" : "none",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
