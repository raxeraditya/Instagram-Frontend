import React from 'react';
import { X, Link as LinkIcon, Facebook, Twitter, Share2 } from 'lucide-react';

interface ShareModalProps {
  postUrl: string;
  onClose: () => void;
}

export function ShareModal({ postUrl, onClose }: ShareModalProps) {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl max-w-sm w-full mx-4">
        <div className="border-b border-gray-200 p-4 text-center relative">
          <h2 className="font-semibold">Share</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Share Options */}
          <button
            onClick={copyLink}
            className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg"
          >
            <LinkIcon className="w-5 h-5" />
            <span>Copy link</span>
          </button>

          <button className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg">
            <Facebook className="w-5 h-5 text-blue-600" />
            <span>Share to Facebook</span>
          </button>

          <button className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg">
            <Twitter className="w-5 h-5 text-blue-400" />
            <span>Share to Twitter</span>
          </button>

          <button className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg">
            <Share2 className="w-5 h-5 text-green-500" />
            <span>Share to Other Apps</span>
          </button>
        </div>
      </div>
    </div>
  );
}