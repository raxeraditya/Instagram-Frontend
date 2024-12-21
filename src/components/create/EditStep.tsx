import { UserAvatar } from "../shared/UserAvatar";

interface EditStepProps {
  previewUrl: string;
  caption: string;
  onCaptionChange: (caption: string) => void;
}

export function EditStep({
  previewUrl,
  caption,
  onCaptionChange,
}: EditStepProps) {
  return (
    <div className="flex-col md:flex w-full">
      {/* Preview */}
      <div className="w-auto h-auto aspect-square bg-black flex items-center justify-center">
        <img
          src={previewUrl}
          alt="Preview"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Caption */}
      <div className="flex-1 p-4 border-l border-gray-200 w-full h-full">
        <div className="flex items-center space-x-3 mb-4">
          <UserAvatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
            alt="Your Profile"
            size="sm"
          />
          <span className="font-semibold">your_username</span>
        </div>
        <textarea
          value={caption}
          onChange={(e) => onCaptionChange(e.target.value)}
          placeholder="Write a caption..."
          className="w-full h-full resize-none border-none focus:ring-0 p-0"
        />
      </div>
    </div>
  );
}
