import { UserAvatar } from "../shared/UserAvatar";

interface SuggestionProps {
  username: string;
  userImage: string;
  subtitle: string;
}

function SuggestionItem({ username, userImage, subtitle }: SuggestionProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <UserAvatar src={userImage} alt={username} size="sm" />
        <div>
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-gray-500 text-xs">{subtitle}</p>
        </div>
      </div>
      <button className="text-blue-500 text-xs font-semibold">Follow</button>
    </div>
  );
}

export function SuggestionsBar() {
  return (
    <div className="hidden lg:block w-80 p-4">
      {/* Current User */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <UserAvatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
            alt="Current User"
          />
          <div>
            <p className="font-semibold">current_user</p>
            <p className="text-gray-500 text-sm">Your Name</p>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-semibold">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between mb-4">
        <span className="text-gray-500 font-semibold text-sm">
          Suggestions For You
        </span>
        <button className="text-xs font-semibold">See All</button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <SuggestionItem
            key={i}
            username={`user_${i}`}
            userImage={`https://images.unsplash.com/photo-${
              1500000000000 + i
            }?w=40&h=40&fit=crop`}
            subtitle="Followed by user_x + 2 more"
          />
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-xs text-gray-400">
        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
          <a href="#">About</a>•<a href="#">Help</a>•<a href="#">Press</a>•
          <a href="#">API</a>•<a href="#">Jobs</a>•<a href="#">Privacy</a>•
          <a href="#">Terms</a>
        </div>
        <p>© 2024 Instagram Clone</p>
      </div>
    </div>
  );
}
