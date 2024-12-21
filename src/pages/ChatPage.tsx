import { useState } from "react";
import { ChatList } from "../components/chat/ChatList";
import { ChatView } from "../components/chat/ChatView";
import type { Chat } from "../types/chat";
import { SAMPLE_CHATS, SAMPLE_MESSAGES } from "../data/chat";

export function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState("");

  return (
    <div className="chat-page mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md flex">
        <ChatList
          chats={SAMPLE_CHATS}
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
        />

        {selectedChat ? (
          <ChatView
            chat={selectedChat}
            messages={SAMPLE_MESSAGES}
            message={message}
            setMessage={setMessage}
            onBack={() => setSelectedChat(null)}
          />
        ) : (
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}
