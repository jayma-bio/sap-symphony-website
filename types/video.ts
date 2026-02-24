/* eslint-disable @typescript-eslint/no-explicit-any */
// Response data type for /api/video endpoint with full media.file population
export interface VideoResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    media: VideoMediaItem[];
    createdBy?: {
      id: string;
      documentId: string;
    };
    updatedBy?: {
      id: string;
      documentId: string;
    };
    locale?: string;
    localizations?: Array<{
      id: string;
      documentId: string;
      media?: VideoMediaItem[];
    }>;
  };
  meta: Record<string, any>;
}

export interface VideoMediaItem {
  id: string;
  tag: string;
  index: number;
  file: VideoFile;
}

export interface VideoFile {
  id: string;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: Record<string, any>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: Record<string, any>;
  related?: Array<{ id: string; documentId: string }>;
  folder?: {
    id: string;
    documentId: string;
  };
  folderPath?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy?: {
    id: string;
    documentId: string;
  };
  updatedBy?: {
    id: string;
    documentId: string;
  };
  locale?: string;
  localizations?: Array<{
    id: string;
    documentId: string;
  }>;
}
