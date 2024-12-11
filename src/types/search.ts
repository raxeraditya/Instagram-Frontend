export interface SearchResult {
  id: number;
  type: 'user' | 'hashtag';
  username?: string;
  avatar?: string;
  followers?: number;
  hashtag?: string;
  posts?: number;
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  recentSearches: SearchResult[];
}