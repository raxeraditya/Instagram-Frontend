import React, { useRef } from "react";
import { Image } from "lucide-react";

interface UploadStepProps {
  onFileSelect: (file: File) => void;
}

export function UploadStep({ onFileSelect }: UploadStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full aspect-square flex flex-col items-center justify-center p-8 space-y-4">
      <div className="p-4 rounded-full bg-blue-50">
        <Image className="w-12 h-12 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold">Drag photos and videos here</h3>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Select from computer
      </button>
    </div>
  );
}
