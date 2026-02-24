/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { VideoMediaItem } from "@/types/video";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoPlayerProps {
  item: VideoMediaItem | null;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ item, className = "" }) => {
  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);

  const showSkeleton = !item || (!thumbnailLoaded && !videoReady);

  if (showSkeleton && !item) {
    return (
      <div className={`relative w-full aspect-video bg-light-black/20 rounded-xl overflow-hidden ${className}`}>
        <Skeleton className="w-full h-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-video bg-light-black rounded-xl overflow-hidden ${className}`}>
      {showSkeleton && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
      )}

      {!thumbnailError && item && !playing && (
        <img
          src={item.thumbnail.url}
          alt={item.thumbnail.alternativeText || "Video thumbnail"}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          onLoad={() => setThumbnailLoaded(true)}
          onError={() => setThumbnailError(true)}
          style={{ display: showSkeleton ? "none" : "block" }}
        />
      )}

      {!playing && item && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
            <svg
              className="w-10 h-10 text-light-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {item && (
        <ReactPlayer
          ref={playerRef}
          src={item.file.url}
          playing={playing}
          width="100%"
          height="100%"
          controls={playing}
          onReady={() => setVideoReady(true)}
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
