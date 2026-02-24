"use client";

import Player, { Track } from "@/components/modules/media-player";
import BlurFade from "@/components/shared/blur-fade";
import { Skeleton } from "@/components/ui/skeleton";
import { useAudios } from "@/hooks/use-audio";

const MediaPlayer = () => {
  const { data: audioData, isLoading } = useAudios({
    page: 1,
    pageSize: 10,
    enabled: true,
  });

  const tracks: Track[] =
    audioData?.data?.music?.map((item) => ({
      title: item.title,
      src: item.track.url,
    })) || [];

  return (
    <div className="w-full min-h-svh md:min-h-screen media-player-bg relative flex flex-col items-center justify-center gap-10 responsive-padding overflow-hidden">
      {/* ── Hero copy ────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-5 z-10">
        {isLoading ? (
          <>
            {/* heading skeleton — two lines */}
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-10 w-72 md:w-96 rounded-lg bg-white/20" />
              <Skeleton className="h-10 w-56 md:w-72 rounded-lg bg-white/20" />
            </div>

            {/* paragraph skeleton — three lines */}
            <div className="flex flex-col items-center gap-2 max-w-3xl w-full">
              <Skeleton className="h-4 w-full max-w-lg rounded-md bg-white/15" />
              <Skeleton className="h-4 w-full max-w-md rounded-md bg-white/15" />
              <Skeleton className="h-4 w-40 rounded-md bg-white/15" />
            </div>
          </>
        ) : (
          <>
            <BlurFade delay={0.2} inView>
              <h1 className="heading text-4xl md:text-5xl text-center leading-tight">
                Connecting people with <br /> the nature
              </h1>
            </BlurFade>

            <BlurFade delay={0.28} inView>
              <p className="paragraph text-white! font-medium! leading-7.5 max-w-3xl text-center">
                Sap Symphony transforms plant bioelectric signals into
                therapeutic music. Using proprietary bio-acoustic technology
              </p>
            </BlurFade>
          </>
        )}
      </div>

      {/* ── Player card ──────────────────────────────────────────────────── */}
      {isLoading ? (
        <PlayerSkeleton />
      ) : (
        <BlurFade
          delay={0.38}
          inView
          className="w-full flex justify-center px-4"
        >
          <Player tracks={tracks} />
        </BlurFade>
      )}

      {/* ── Overlay tint ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-light-black/10 pointer-events-none" />

      {/* ── Bottom fade ──────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-light-white pointer-events-none" />
    </div>
  );
};

// ─── Player Skeleton ──────────────────────────────────────────────────────────
// Mirrors the exact Player card layout: 595×154px, same padding, same structure
const PlayerSkeleton = () => (
  <div className="w-full flex justify-center px-4">
    <div
      className={[
        "flex w-full max-w-[595px] h-[154px] flex-col justify-between",
        "rounded-[30px] border border-white/20",
        "bg-white/10 backdrop-blur-sm",
        "px-9 py-[22px]",
      ].join(" ")}
    >
      {/* ── Scrubber row ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-[7px]">
        {/* Track rail with thumb */}
        <div className="relative h-[5px] w-full">
          <Skeleton className="h-full w-full rounded-full bg-white/20" />
          {/* Thumb positioned at ~50% to look natural */}
          <Skeleton className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[22px] w-[22px] rounded-full bg-white/35" />
        </div>

        {/* Timestamps */}
        <div className="flex justify-between">
          <Skeleton className="h-3 w-8 rounded bg-white/20" />
          <Skeleton className="h-3 w-8 rounded bg-white/20" />
        </div>
      </div>

      {/* ── Controls row ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-5">
        {/* Prev button — 44px */}
        <Skeleton className="h-11 w-11 rounded-full bg-white/20" />

        {/* Play button — 58px, slightly brighter */}
        <Skeleton className="h-[58px] w-[58px] rounded-full bg-white/25" />

        {/* Next button — 44px */}
        <Skeleton className="h-11 w-11 rounded-full bg-white/20" />
      </div>
    </div>
  </div>
);

export default MediaPlayer;