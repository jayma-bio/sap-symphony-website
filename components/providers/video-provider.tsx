"use client"
import React, { createContext, useContext, useState } from 'react';

interface VideoContextType {
  activeVideoId: string | null;
  setActiveVideoId: (id: string | null) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <VideoContext.Provider value={{ activeVideoId, setActiveVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};