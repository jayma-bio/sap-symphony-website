import { api } from "@/lib/api";
import { VideoResponse } from "@/types/video";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UseVideosOptions {
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
  page?: number;
  pageSize?: number;
}

export const useVideos = (
  options?: UseVideosOptions,
): UseQueryResult<VideoResponse, Error> => {
  return useQuery<VideoResponse, Error>({
    queryKey: ["videos", options?.page, options?.pageSize],
    queryFn: async () => {
      const params = {
        "populate[media][populate][file][populate]": "*",
        "populate[media][populate][thumbnail][populate]": "*",
        pagination: {
          page: options?.page ?? 1,
          pageSize: options?.pageSize ?? 25,
          withCount: true,
        },
      };

      const response = await api.get("/video", { params });
      return response.data;
    },
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  });
};

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
          "populate[media][populate][thumbnail][populate]": "*",
        },
      });
      return response.data;
    },
    enabled: (options?.enabled ?? true) && !!videoId,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  });
};
