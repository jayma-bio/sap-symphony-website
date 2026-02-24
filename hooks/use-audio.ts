/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/api";
import { AudioResponse } from "@/types/audio";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UseAudiosOptions {
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
  page?: number;
  pageSize?: number;
  sort?: string;
  filters?: Record<string, any>;
  fields?: string;
  locale?: string;
}

export const useAudios = (
  options?: UseAudiosOptions,
): UseQueryResult<AudioResponse, Error> => {
  return useQuery<AudioResponse, Error>({
    queryKey: ["audios", options?.page, options?.pageSize, options?.sort],
    queryFn: async () => {
      const params: Record<string, any> = {
        "populate[music][populate][track][populate]": "*",
        pagination: {
          page: options?.page ?? 1,
          pageSize: options?.pageSize ?? 25,
          withCount: true,
        },
        ...(options?.sort && { sort: options.sort }),
        ...(options?.filters && { filters: JSON.stringify(options.filters) }),
        ...(options?.fields && { fields: options.fields }),
        ...(options?.locale && { locale: options.locale }),
      };

      const response = await api.get("/audio", { params });
      return response.data;
    },
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  });
};

export const useAudioDetail = (
  audioId: string | number,
  options?: UseAudiosOptions,
): UseQueryResult<AudioResponse, Error> => {
  return useQuery<AudioResponse, Error>({
    queryKey: ["audio", audioId],
    queryFn: async () => {
      const params: Record<string, any> = {
        "populate[music][populate][track][populate]": "*",
        ...(options?.filters && { filters: JSON.stringify(options.filters) }),
        ...(options?.fields && { fields: options.fields }),
        ...(options?.locale && { locale: options.locale }),
      };

      const response = await api.get(`/audio/${audioId}`, { params });
      return response.data;
    },
    enabled: (options?.enabled ?? true) && !!audioId,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  });
};
