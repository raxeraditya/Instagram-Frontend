import React from 'react';
import { UserAvatar } from '../shared/UserAvatar';
import { useComments } from '../../hooks/useComments';

interface PostCommentsProps {
  postId: string;
}

export function PostComments({ postId }: PostCommentsProps) {
  const { comments, addComment } = useComments(postId);
  const [newComment, setNewComment] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="border-t border-gray-200">
      {/* Comments List */}
      <div className="max-h-60 overflow-y-auto px-3 py-2">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-2 mb-2">
            <UserAvatar src={comment.userImage} alt={comment.username} size="sm" />
            <div>
              <span className="font-semibold mr-2">{comment.username}</span>
              <span>{comment.text}</span>
              <p className="text-xs text-gray-500 mt-1">{comment.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border-none focus:ring-0 text-sm"
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="text-blue-500 font-semibold text-sm disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}