import React from "react";
import { X } from "lucide-react";
import type { CreatePostState } from "../../types/post";
import { UploadStep } from "./UploadStep";
import { EditStep } from "./EditStep";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [state, setState] = React.useState<CreatePostState>({
    isOpen: false,
    step: "upload",
    media: null,
    caption: "",
    previewUrl: "",
  });

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setState((prev) => ({
      ...prev,
      media: file,
      previewUrl: url,
      step: "edit",
    }));
  };

  const handleSubmit = async () => {
    if (!state.media) return;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful response
      const response = {
        success: true,
        url: state.previewUrl,
      };

      if (response.success) {
        onClose();
        setState((prev) => ({
          ...prev,
          media: null,
          caption: "",
          previewUrl: "",
          step: "upload",
        }));
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-full h-auto md:max-w-4xl md:w-full md:mx-4 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
          <h2 className="font-semibold">Create new post</h2>
          {state.step === "edit" && (
            <button
              onClick={handleSubmit}
              className="text-blue-500 font-semibold hover:text-blue-600"
            >
              Share
            </button>
          )}
          {state.step === "upload" && <div className="w-6" />}
        </div>

        {/* Content */}
        <div className="flex-1 flex-col md:flex">
          {state.step === "upload" ? (
            <UploadStep onFileSelect={handleFileSelect} />
          ) : (
            <EditStep
              previewUrl={state.previewUrl}
              caption={state.caption}
              onCaptionChange={(caption) =>
                setState((prev) => ({ ...prev, caption }))
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
