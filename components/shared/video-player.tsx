/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Loader } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from '@/lib/utils';
import { useVideo } from '../providers/video-provider';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer = ({ src, className }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { activeVideoId, setActiveVideoId } = useVideo();

  // Initial loading timer
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Stop playing when another video becomes active
  useEffect(() => {
    if (activeVideoId !== src && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [activeVideoId, src, isPlaying]);

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      setActiveVideoId(null);
    };

    video.onplay = () => {
      setIsPlaying(true);
      setIsEnded(false);
    };

    video.onpause = () => {
      setIsPlaying(false);
      if (activeVideoId === src) {
        setActiveVideoId(null);
      }
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.onplay = null;
      video.onpause = null;
      video.removeEventListener('ended', handleEnded);
    };
  }, [src, setActiveVideoId, activeVideoId]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        if (video.ended) {
          video.currentTime = 0;
        }
        setActiveVideoId(src);
        await video.play();
        setIsPlaying(true);
        setIsEnded(false);
      } else {
        video.pause();
        setIsPlaying(false);
        setActiveVideoId(null);
      }
    } catch (error) {
      console.error('Error toggling video playback:', error);
      setIsPlaying(false);
      setActiveVideoId(null);
    }
  };

  if (isLoading) {
    return (
      <div className={cn("relative w-full md:aspect-3/1 aspect-4/3 rounded-xl overflow-hidden", className)}>
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <Loader className="w-10 h-10 text-green3 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full md:aspect-3/1 aspect-4/3 rounded-xl overflow-hidden", className)}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        playsInline
      />
      <button
        onClick={togglePlay}
        className={cn(
          "absolute inset-0 w-full h-full flex items-center justify-center",
          isPlaying ? "bg-black/20 opacity-0 hover:opacity-100" : "bg-black/20"
        )}
      >
        <div className={cn(
          "w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110",
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}>
          {isPlaying && !isEnded ? (
            <Pause className="w-7 h-7 text-green4"/>
          ) : (
            <Play className="w-7 h-7 text-green4 ml-1"/>
          )}
        </div>
      </button>
    </div>
  );
};

export default VideoPlayer;