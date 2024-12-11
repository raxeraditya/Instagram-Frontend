export interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

export interface Chat {
  id: number;
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
}