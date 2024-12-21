import { Chat, Message } from "../types/chat";

const SAMPLE_CHATS: Chat[] = [
  {
    id: 1,
    username: "sarah_designs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    lastMessage: "Thanks for the feedback!",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    username: "mike_photo",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    lastMessage: "Let's collaborate soon",
    time: "1h",
  },
  {
    id: 3,
    username: "travel_lisa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
    lastMessage: "Great shots from yesterday!",
    time: "3h",
  },
  {
    id: 1,
    username: "sarah_designs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    lastMessage: "Thanks for the feedback!",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    username: "mike_photo",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    lastMessage: "Let's collaborate soon",
    time: "1h",
  },
  {
    id: 3,
    username: "travel_lisa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
    lastMessage: "Great shots from yesterday!",
    time: "3h",
  },
  {
    id: 1,
    username: "sarah_designs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    lastMessage: "Thanks for the feedback!",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    username: "mike_photo",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    lastMessage: "Let's collaborate soon",
    time: "1h",
  },
  {
    id: 3,
    username: "travel_lisa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
    lastMessage: "Great shots from yesterday!",
    time: "3h",
  },
  {
    id: 1,
    username: "sarah_designs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    lastMessage: "Thanks for the feedback!",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    username: "mike_photo",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    lastMessage: "Let's collaborate soon",
    time: "1h",
  },
  {
    id: 3,
    username: "travel_lisa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
    lastMessage: "Great shots from yesterday!",
    time: "3h",
  },
];

const SAMPLE_MESSAGES: Message[] = [
  { id: 1, text: "Hey! How are you?", sender: "user", timestamp: "10:00 AM" },
  {
    id: 2,
    text: "I'm good! Just working on some designs.",
    sender: "sarah_designs",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    text: "They look amazing! 😍",
    sender: "user",
    timestamp: "10:03 AM",
  },
  {
    id: 4,
    text: "Thanks! I'll send you more updates soon.",
    sender: "sarah_designs",
    timestamp: "10:05 AM",
  },
  { id: 1, text: "Hey! How are you?", sender: "user", timestamp: "10:00 AM" },
  {
    id: 2,
    text: "I'm good! Just working on some designs.",
    sender: "sarah_designs",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    text: "They look amazing! 😍",
    sender: "user",
    timestamp: "10:03 AM",
  },
  {
    id: 4,
    text: "Thanks! I'll send you more updates soon.",
    sender: "sarah_designs",
    timestamp: "10:05 AM",
  },
  { id: 1, text: "Hey! How are you?", sender: "user", timestamp: "10:00 AM" },
  {
    id: 2,
    text: "I'm good! Just working on some designs.",
    sender: "sarah_designs",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    text: "They look amazing! 😍",
    sender: "user",
    timestamp: "10:03 AM",
  },
  {
    id: 4,
    text: "Thanks! I'll send you more updates soon.",
    sender: "sarah_designs",
    timestamp: "10:05 AM",
  },
];

export { SAMPLE_CHATS, SAMPLE_MESSAGES };
