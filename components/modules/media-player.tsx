"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils"; // shadcn cn util
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Track {
  title: string;
  src: string;
}

interface PlayerProps {
  tracks: Track[];
}

// ─── Helper ───────────────────────────────────────────────────────────────────
const fmt = (s: number) => {
  if (!isFinite(s) || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

// ─── Player ───────────────────────────────────────────────────────────────────
const Player = ({ tracks }: PlayerProps) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[trackIndex];
  const progress = duration ? (currentTime / duration) * 100 : 0;

  // ── Audio listeners ─────────────────────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const onMeta = () => setDuration(audio.duration);
    const onEnded = () => goNext();
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  // ── Controls ─────────────────────────────────────────────────────────────────
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  const goPrev = () =>
    setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);

  const goNext = useCallback(
    () => setTrackIndex((i) => (i + 1) % tracks.length),
    [tracks.length]
  );

  // ── Seek ─────────────────────────────────────────────────────────────────────
  const calcSeek = (clientX: number) => {
    const bar = barRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const t = ratio * duration;
    audio.currentTime = t;
    setCurrentTime(t);
  };

  const onBarMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    calcSeek(e.clientX);
    const onMove = (me: MouseEvent) => calcSeek(me.clientX);
    const onUp = (me: MouseEvent) => {
      calcSeek(me.clientX);
      setIsDragging(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <>
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" />

      <div
        className={cn(
          "flex w-full max-w-148.75 h-36 flex-col justify-between",
          "rounded-[30px] border border-[#c3d7a080]",
          "bg-[#ecf2df] px-9 py-5.5",
          "shadow-[0_6px_28px_rgba(70,90,40,0.14),inset_0_1.5px_0_rgba(255,255,255,0.85)]"
        )}
      >
        {/* ── Scrubber + time labels ──────────────────────────────────────── */}
        <div className="flex flex-col gap-1.75">
          {/*
            Track rail:
            • h-[5px] rounded-full
            • bg-[#cdd8ba]          → muted sage unfilled track
            • shadow-[inset...]     → pressed-in depth
            • relative cursor-pointer select-none
          */}
          <div
            ref={barRef}
            onMouseDown={onBarMouseDown}
            className={cn(
              "relative h-[5px] w-full cursor-pointer select-none rounded-full",
              "bg-[#cdd8ba]",
              "shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.13)]"
            )}
          >
            {/* Filled portion — width is runtime so kept as inline style */}
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#46582e] to-[#587040]"
              style={{ width: `${progress}%` }}
            />

            {/*
              Sphere thumb:
              • 22×22, rounded-full
              • bg-[radial-gradient(...)]  → 3D olive sphere, bright top-left
              • shadow-*                   → drop shadow + white rim glow + inner highlight
              • left is runtime → inline style
            */}
            <div
              className={cn(
                "absolute top-1/2 z-10 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                "bg-[radial-gradient(circle_at_36%_32%,#7e9468_0%,#506040_30%,#374830_60%,#26361e_100%)]",
                "shadow-[0_2px_8px_rgba(0,0,0,0.35),0_0_0_2.5px_rgba(255,255,255,0.22),inset_0_1.5px_2.5px_rgba(255,255,255,0.28)]",
                isDragging ? "transition-none" : "transition-[left] duration-75 ease-linear"
              )}
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Time stamps */}
          <div className="flex justify-between">
            <span
              className={cn(
                "text-[11px] font-medium tabular-nums tracking-[0.01em]",
                "text-[#6a7a52]"
              )}
            >
              {fmt(currentTime)}
            </span>
            <span
              className={cn(
                "text-[11px] font-medium tabular-nums tracking-[0.01em]",
                "text-[#6a7a52]"
              )}
            >
              {fmt(duration)}
            </span>
          </div>
        </div>

        {/* ── Controls ───────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-8">
          {/* Prev */}
          <CircleBtn size="sm" onClick={goPrev} aria-label="Previous track">
            <ChevronLeft className="size-6 stroke-2" />
          </CircleBtn>

          {/* Play / Pause */}
          <CircleBtn size="lg" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause className="size-7 stroke-2" /> : <Play className="size-7 stroke-2" />}
          </CircleBtn>

          {/* Next */}
          <CircleBtn size="sm" onClick={goNext} aria-label="Next track">
            <ChevronRight className="size-6 stroke-2" />
          </CircleBtn>
        </div>
      </div>
    </>
  );
};

// ─── Circle Button ─────────────────────────────────────────────────────────────
interface CircleBtnProps {
  size: "sm" | "lg";
  onClick: () => void;
  "aria-label": string;
  children: React.ReactNode;
}

const CircleBtn = ({
  size,
  onClick,
  "aria-label": label,
  children,
}: CircleBtnProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={cn(
        // Base — shared across sm and lg
        "relative flex shrink-0 cursor-pointer select-none items-center justify-center rounded-full border-0 outline-none",
        // 3-D olive sphere background
        "bg-[radial-gradient(circle_at_36%_32%,#7e9468_0%,#506040_30%,#374830_60%,#26361e_100%)]",
        // Icon colour — light cream
        "text-[rgba(235,248,210,0.95)]",
        // Smooth press/hover transition
        "transition-[transform,box-shadow] duration-100 ease-in-out",

        // ── Size variants ──────────────────────────────────────────────────
        size === "sm" && "h-11 w-11",  // 44px
        size === "lg" && "h-[58px] w-[58px]",

        // ── Halo ring + 3-D shadows (idle) ────────────────────────────────
        //   The key visual: a thick light-sage ring (0 0 0 Npx #dce8c8)
        //   + outer glow + inner specular highlight + inner bottom shadow
        size === "sm" && !pressed && [
          "shadow-[0_0_0_5px_#dce8c8,0_0_0_6px_rgba(180,200,140,0.4),0_4px_12px_rgba(0,0,0,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.28),inset_0_-2px_4px_rgba(0,0,0,0.30)]",
        ],
        size === "lg" && !pressed && [
          "shadow-[0_0_0_7px_#dce8c8,0_0_0_8px_rgba(180,200,140,0.4),0_6px_18px_rgba(0,0,0,0.28),inset_0_2px_3px_rgba(255,255,255,0.28),inset_0_-2px_5px_rgba(0,0,0,0.32)]",
        ],

        // ── Pressed state — scale down, invert inner shadow ────────────────
        pressed && "scale-95",
        size === "sm" && pressed && [
          "shadow-[0_0_0_5px_#dce8c8,0_0_0_6px_rgba(180,200,140,0.4),0_1px_4px_rgba(0,0,0,0.20),inset_0_3px_6px_rgba(0,0,0,0.35)]",
        ],
        size === "lg" && pressed && [
          "shadow-[0_0_0_7px_#dce8c8,0_0_0_8px_rgba(180,200,140,0.4),0_1px_6px_rgba(0,0,0,0.22),inset_0_3px_8px_rgba(0,0,0,0.38)]",
        ],

        // Hover (non-pressed) subtle lift
        !pressed && "hover:scale-[1.04]",
      )}
    >
      {children}
    </button>
  );
};

export default Player;
export type { PlayerProps };