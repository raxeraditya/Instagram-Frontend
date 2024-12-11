import React from 'react';
import { X, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { SAMPLE_REELS } from '../../data/reels';
import { UserAvatar } from '../shared/UserAvatar';

interface ReelModalProps {
  reelId: number;
  onClose: () => void;
}

export function ReelModal({ reelId, onClose }: ReelModalProps) {
  const reel = SAMPLE_REELS.find((r) => r.id === reelId);
  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="flex max-w-4xl w-full h-[80vh]">
        {/* Video Side */}
        <div className="flex-1 relative bg-black">
          <video
            src={reel.videoUrl}
            className="w-full h-full object-contain"
            controls
            autoPlay
          />
        </div>

        {/* Info Side */}
        <div className="w-96 bg-white">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <UserAvatar src={reel.userAvatar} alt={reel.username} />
              <div>
                <p className="font-semibold">{reel.username}</p>
                <p className="text-sm text-gray-500">{reel.location}</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <p>{reel.caption}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button>
                  <Heart className="w-6 h-6" />
                </button>
                <button>
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button>
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <button>
                <Bookmark className="w-6 h-6" />
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