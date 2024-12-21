import { ArrowLeft, Phone, Video, Info } from "lucide-react";
import { UserAvatar } from "../shared/UserAvatar";
import { Chat, Message } from "../../types/chat";

interface ChatViewProps {
  chat: Chat;
  messages: Message[];
  message: string;
  setMessage: (message: string) => void;
  onBack: () => void;
}

export function ChatView({
  chat,
  messages,
  message,
  setMessage,
  onBack,
}: ChatViewProps) {
  return (
    <div className="flex-1 flex flex-col h-[90vh]">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="lg:hidden">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <UserAvatar src={chat.avatar} alt={chat.username} />
          <h3 className="font-semibold">{chat.username}</h3>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2 mx-auto">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setMessage("")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
