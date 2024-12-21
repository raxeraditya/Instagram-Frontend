export interface User {
  id: number;
  username: string;
  avatar: string;
  name: string;
  followers: number;
  following: boolean;
}

export const USERS: User[] = [
  {
    id: 1,
    username: "emma.watson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: "Emma Watson",
    followers: 15400,
    following: false,
  },
  {
    id: 2,
    username: "photo.grapher",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    name: "Alex Turner",
    followers: 25300,
    following: true,
  },
  {
    id: 3,
    username: "travel.diary",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    name: "Sophie Chen",
    followers: 12800,
    following: false,
  },
  {
    id: 4,
    username: "art.gallery",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    name: "Maria Garcia",
    followers: 32100,
    following: true,
  },
  {
    id: 5,
    username: "food.lover",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    name: "James Wilson",
    followers: 18900,
    following: false,
  },
];
