export interface CreatePostState {
  isOpen: boolean;
  step: 'upload' | 'edit';
  media: File | null;
  caption: string;
  previewUrl: string;
}

export interface UploadResponse {
  url: string;
  success: boolean;
}