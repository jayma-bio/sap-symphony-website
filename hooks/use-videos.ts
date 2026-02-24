import { api } from "@/lib/api";
import { VideoResponse } from "@/types/video";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UseVideosOptions {
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
}

// Hook for getting all videos (list)
export const useVideos = (
  options?: UseVideosOptions,
): UseQueryResult<VideoResponse, Error> => {
  return useQuery<VideoResponse, Error>({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await api.get("/video", {
        params: {
          "populate[media][populate][file][populate]": "*",
          pagination: {
            pageSize: 25,
          },
        },
      });
      return response.data; // VideoResponse type
    },
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  });
};

// Hook for getting single video details
export const useVideoDetail = (
  videoId: string | number,
  options?: UseVideosOptions,
): UseQueryResult<VideoResponse, Error> => {
  return useQuery<VideoResponse, Error>({
    queryKey: ["video", videoId],
    queryFn: async () => {
      const response = await api.get(`/video/${videoId}`, {
        params: {
          "populate[media][populate][file][populate]": "*",
        },
      });
      const video: VideoResponse = response.data;
      return video;
    },
    enabled: (options?.enabled ?? true) && !!videoId,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  });
};
