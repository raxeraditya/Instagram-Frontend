import React from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PostActionsProps {
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onSave: () => void;
}

export function PostActions({
  isLiked,
  isSaved,
  onLike,
  onComment,
  onShare,
  onSave,
}: PostActionsProps) {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <button onClick={onLike}>
            <Heart 
              className={cn(
                "w-6 h-6 transition-colors",
                isLiked ? "fill-red-500 text-red-500" : "hover:text-gray-500"
              )} 
            />
          </button>
          <button onClick={onComment}>
            <MessageCircle className="w-6 h-6 hover:text-gray-500" />
          </button>
          <button onClick={onShare}>
            <Send className="w-6 h-6 hover:text-gray-500" />
          </button>
        </div>
        <button onClick={onSave}>
          <Bookmark 
            className={cn(
              "w-6 h-6 transition-colors",
              isSaved ? "fill-black" : "hover:text-gray-500"
            )} 
          />
        </button>
      </div>
    </div>
  );
}