import React from "react";
import { X, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { SAMPLE_REELS } from "../../data/reels";
import { UserAvatar } from "../shared/UserAvatar";

interface ReelModalProps {
  reelId: number;
  onClose: () => void;
}

export function ReelModal({ reelId, onClose }: ReelModalProps) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const reel = SAMPLE_REELS.find((r) => r.id === reelId);
  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black hover:text-gray-300 z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="h-full flex flex-col md:flex-row">
        {/* Video Side */}
        <div className="relative flex-1 flex items-center justify-center bg-black">
          <video
            src={reel.videoUrl}
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
            playsInline
          />
        </div>

        {/* Info Side */}
        <div className="w-full md:w-96 bg-black md:bg-white text-white md:text-black">
          <div className="p-4 border-b border-gray-800 md:border-gray-200">
            <div className="flex items-center space-x-3">
              <UserAvatar src={reel.userAvatar} alt={reel.username} />
              <div>
                <p className="font-semibold">{reel.username}</p>
                <p className="text-sm opacity-75">{reel.location}</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <p>{reel.caption}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={() => setIsLiked(!isLiked)}>
                  <Heart
                    className={`w-6 h-6 ${
                      isLiked ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </button>
                <button>
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button>
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <button onClick={() => setIsSaved(!isSaved)}>
                <Bookmark
                  className={`w-6 h-6 ${isSaved ? "fill-current" : ""}`}
                />
              </button>
            </div>
            <p className="mt-2 font-semibold">
              {reel.likes.toLocaleString()} likes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
