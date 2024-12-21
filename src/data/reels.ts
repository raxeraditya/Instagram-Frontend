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
    username: "emma.watson",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&h=900&fit=crop",
    videoUrl: "https://example.com/video1.mp4",
    views: 15400,
    likes: 2300,
    caption: "Exploring beautiful landscapes 🌎",
    location: "Bali, Indonesia",
  },
  {
    id: 2,
    username: "photo.grapher",
    userAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=500&h=900&fit=crop",
    videoUrl: "https://example.com/video2.mp4",
    views: 25300,
    likes: 4200,
    caption: "Making the perfect pasta 🍝",
    location: "Rome, Italy",
  },
  {
    id: 3,
    username: "travel.diary",
    userAvatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=500&h=900&fit=crop",
    videoUrl: "https://example.com/video3.mp4",
    views: 18900,
    likes: 3100,
    caption: "Morning workout routine 💪",
    location: "Los Angeles, USA",
  },
];
