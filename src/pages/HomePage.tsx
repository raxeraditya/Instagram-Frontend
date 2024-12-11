import React from 'react';
import { Post } from '../components/feed/Post';
import { SuggestionsBar } from '../components/suggestions/SuggestionsBar';

const SAMPLE_POSTS = [
  {
    id: 1,
    username: 'photography_lover',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop',
    postImage: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1200&h=1200&fit=crop',
    caption: 'Beautiful sunset at the beach 🌅',
    likes: 1234,
    timeAgo: '2 hours ago'
  },
  {
    id: 2,
    username: 'travel_adventures',
    userImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop',
    postImage: 'https://images.unsplash.com/photo-1707343844416-cce1797fd898?w=1200&h=1200&fit=crop',
    caption: 'Exploring new places 🌎✈️',
    likes: 856,
    timeAgo: '4 hours ago'
  },
  {
    id: 3,
    username: 'foodie_delights',
    userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop',
    postImage: 'https://images.unsplash.com/photo-1707343844459-2ab66b6f4d68?w=1200&h=1200&fit=crop',
    caption: 'Homemade pasta night 🍝👨‍🍳',
    likes: 2045,
    timeAgo: '6 hours ago'
  }
];

export function HomePage() {
  return (
    <div className="max-w-[935px] mx-auto px-4 flex flex-col lg:flex-row">
      {/* Main Feed */}
      <div className="flex-grow max-w-[630px]">
        {SAMPLE_POSTS.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>

      {/* Suggestions Sidebar */}
      <div className="hidden lg:block ml-8">
        <SuggestionsBar />
      </div>
    </div>
  );
}