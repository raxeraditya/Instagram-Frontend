import { useState } from 'react';

interface Comment {
  id: number;
  username: string;
  userImage: string;
  text: string;
  timeAgo: string;
}

// Simulated comments data
const INITIAL_COMMENTS: Record<string, Comment[]> = {
  default: [
    {
      id: 1,
      username: "sarah_designs",
      userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
      text: "This is amazing! 😍",
      timeAgo: "2h"
    },
    {
      id: 2,
      username: "photo_enthusiast",
      userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
      text: "Great composition!",
      timeAgo: "1h"
    }
  ]
};

export function useComments(postId: string) {
  const [comments, setComments] = useState<Comment[]>(
    INITIAL_COMMENTS[postId] || INITIAL_COMMENTS.default
  );

  const addComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      username: "current_user",
      userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop",
      text,
      timeAgo: "Just now"
    };
    setComments(prev => [...prev, newComment]);
  };

  return { comments, addComment };
}