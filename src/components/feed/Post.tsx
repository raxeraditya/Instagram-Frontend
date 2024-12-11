import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { UserAvatar } from '../shared/UserAvatar';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';
import { ShareModal } from '../shared/ShareModal';

interface PostProps {
  username: string;
  userImage: string;
  postImage: string;
  caption: string;
  likes: number;
  timeAgo: string;
}

export function Post({ username, userImage, postImage, caption, likes: initialLikes, timeAgo }: PostProps) {
  const [showComments, setShowComments] = React.useState(false);
  const [showShareModal, setShowShareModal] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [likes, setLikes] = React.useState(initialLikes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <UserAvatar src={userImage} alt={username} />
          <span className="font-semibold">{username}</span>
        </div>
        <button>
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img 
          src={postImage} 
          alt="Post" 
          className="w-full aspect-square object-cover"
          onDoubleClick={handleLike}
        />
      </div>

      {/* Post Actions */}
      <PostActions
        isLiked={isLiked}
        isSaved={isSaved}
        onLike={handleLike}
        onComment={() => setShowComments(!showComments)}
        onShare={() => setShowShareModal(true)}
        onSave={() => setIsSaved(!isSaved)}
      />

      {/* Likes */}
      <div className="px-3">
        <p className="font-semibold mb-2">{likes.toLocaleString()} likes</p>

        {/* Caption */}
        <p>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>

        {/* Time */}
        <p className="text-gray-500 text-xs mt-2">{timeAgo}</p>
      </div>

      {/* Comments Section */}
      {showComments && <PostComments postId={username} />}

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          postUrl={`https://example.com/p/${username}`}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
}