"use client";

import Player, { Track } from "@/components/modules/media-player";
import BlurFade from "@/components/shared/blur-fade";
import { audioData } from "@/constants/audio";

const MediaPlayer = () => {
  const tracks: Track[] =
    audioData.map((item) => ({
      title: item.title,
      src: item.track.toString(),
    })) || [];

  return (
    <div className="w-full min-h-[85vh] md:min-h-screen media-player-bg relative flex flex-col items-center justify-center gap-10 responsive-padding overflow-hidden">
      {/* ── Hero copy ────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-5 z-10">
        <BlurFade delay={0.2} inView>
          <h1 className="heading text-4xl md:text-5xl text-center leading-tight">
            Connecting people with <br className="hidden md:block" /> the nature
          </h1>
        </BlurFade>

        <BlurFade delay={0.28} inView>
          <p className="paragraph text-white! font-medium! leading-7.5 max-w-3xl text-center">
            Sap Symphony transforms plant bioelectric signals into
            therapeutic music. Using proprietary bio-acoustic technology
          </p>
        </BlurFade>
      </div>

      {/* ── Player card ──────────────────────────────────────────────────── */}
      <BlurFade
        delay={0.38}
        inView
        className="w-full flex justify-center px-4 z-20"
      >
        <Player tracks={tracks} />
      </BlurFade>

      {/* ── Overlay tint ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-light-black/50 pointer-events-none" />

      {/* ── Bottom fade ──────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-light-white pointer-events-none" />
    </div>
  );
};

export default MediaPlayer;
