export interface Reel {
  id: number;
  username: string;
  userAvatar: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  likes: number;
  caption: string;
  location?: string;
}

export const SAMPLE_REELS: Reel[] = [
  {
    id: 1,
    username: "travel_adventures",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&h=900&fit=crop",
    videoUrl: "https://example.com/video1.mp4", // Replace with actual video URL
    views: 15400,
    likes: 2300,
    caption: "Exploring beautiful landscapes 🌎",
    location: "Bali, Indonesia"
  },
  {
    id: 2,
    username: "food_lover",
    userAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=500&h=900&fit=crop",
    videoUrl: "https://example.com/video2.mp4",
    views: 25300,
    likes: 4200,
    caption: "Making the perfect pasta 🍝",
    location: "Rome, Italy"
  },
  {
    id: 3,
    username: "fitness_guru",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=500&h=900&fit=crop",
    videoUrl: "https://example.com/video3.mp4",
    views: 18900,
    likes: 3100,
    caption: "Morning workout routine 💪",
    location: "Los Angeles, USA"
  }
];