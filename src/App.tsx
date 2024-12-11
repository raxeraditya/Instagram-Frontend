import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { HomePage } from './pages/HomePage';
import { ChatPage } from './pages/ChatPage';
import { SearchPage } from './pages/SearchPage';
import { CreatePage } from './pages/CreatePage';
import { ReelsPage } from './pages/ReelsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="lg:ml-64 pt-4 pb-20 lg:pb-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<ChatPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/reels" element={<ReelsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}