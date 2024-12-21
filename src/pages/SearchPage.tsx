import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { UserAvatar } from "../components/shared/UserAvatar";
import type { SearchResult, SearchState } from "../types/search";

const DUMMY_DATA: SearchResult[] = [
  {
    id: 1,
    type: "user",
    username: "photography_pro",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    followers: 15400,
  },
  {
    id: 2,
    type: "hashtag",
    hashtag: "photography",
    posts: 2500000,
  },
  {
    id: 3,
    type: "user",
    username: "travel_photography",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    followers: 25300,
  },
  {
    id: 4,
    type: "user",
    username: "photo_daily",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
    followers: 12800,
  },
  {
    id: 5,
    type: "hashtag",
    hashtag: "photooftheday",
    posts: 1800000,
  },
];

function SearchResultItem({
  result,
  onSelect,
}: {
  result: SearchResult;
  onSelect: (result: SearchResult) => void;
}) {
  return (
    <div
      className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
      onClick={() => onSelect(result)}
    >
      {result.type === "user" ? (
        <>
          <UserAvatar src={result.avatar!} alt={result.username!} />
          <div className="ml-3">
            <p className="font-semibold">{result.username}</p>
            <p className="text-sm text-gray-500">
              {result.followers?.toLocaleString()} followers
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-lg">#</span>
          </div>
          <div className="ml-3">
            <p className="font-semibold">#{result.hashtag}</p>
            <p className="text-sm text-gray-500">
              {result.posts?.toLocaleString()} posts
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export function SearchPage() {
  const [searchState, setSearchState] = useState<SearchState>({
    query: "",
    results: [],
    recentSearches: [],
  });

  const handleSearch = (query: string) => {
    setSearchState((prev) => ({
      ...prev,
      query,
      results: query
        ? DUMMY_DATA.filter(
            (item) =>
              (item.type === "user" &&
                item.username?.toLowerCase().includes(query.toLowerCase())) ||
              (item.type === "hashtag" &&
                item.hashtag?.toLowerCase().includes(query.toLowerCase()))
          )
        : [],
    }));
  };

  const handleSelect = (result: SearchResult) => {
    setSearchState((prev) => ({
      ...prev,
      recentSearches: [
        result,
        ...prev.recentSearches.filter((item) => item.id !== result.id),
      ].slice(0, 5),
    }));
  };

  const clearSearch = () => {
    setSearchState((prev) => ({ ...prev, query: "", results: [] }));
  };

  const removeRecent = (id: number) => {
    setSearchState((prev) => ({
      ...prev,
      recentSearches: prev.recentSearches.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md">
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchState.query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-10 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchState.query && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results or Recent Searches */}
        <div className="divide-y divide-gray-200">
          {searchState.query ? (
            searchState.results.length > 0 ? (
              searchState.results.map((result) => (
                <SearchResultItem
                  key={result.id}
                  result={result}
                  onSelect={handleSelect}
                />
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for "{searchState.query}"
              </div>
            )
          ) : (
            <>
              {searchState.recentSearches.length > 0 && (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Recent Searches</h3>
                  </div>
                  <div className="space-y-2">
                    {searchState.recentSearches.map((result) => (
                      <div
                        key={result.id}
                        className="flex items-center justify-between"
                      >
                        <SearchResultItem
                          result={result}
                          onSelect={handleSelect}
                        />
                        <button
                          onClick={() => removeRecent(result.id)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
