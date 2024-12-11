import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Search,
  Film,
  MessageCircle,
  PlusSquare,
  Instagram,
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface LinkProps {
  to: string;
  icon: React.ElementType;
  label?: string;
  state?: object;
}

function Link({ to, icon: Icon, label, state }: LinkProps) {
  return (
    <NavLink
      to={to}
      state={state}
      className={({ isActive }) =>
        cn(
          'flex items-center p-3 rounded-lg transition-colors',
          'hover:bg-gray-100',
          'lg:w-full',
          isActive && 'font-bold'
        )
      }
    >
      <Icon className="w-6 h-6" />
      {label && <span className="hidden lg:block ml-4">{label}</span>}
    </NavLink>
  );
}

export function Sidebar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-40">
        <div className="p-6 flex items-center">
          <Instagram className="w-8 h-8" />
          <span className="ml-2 text-xl font-bold">Instagram</span>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <Link to="/" icon={Home} label="Home" />
          <Link to="/search" icon={Search} label="Search" />
          <Link to="/reels" icon={Film} label="Reels" />
          <Link to="/messages" icon={MessageCircle} label="Messages" />
          <Link 
            to="/create" 
            icon={PlusSquare} 
            label="Create"
            state={{ from: location.pathname }}
          />
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <nav className="flex justify-around p-4">
          <Link to="/" icon={Home} />
          <Link to="/search" icon={Search} />
          <Link to="/reels" icon={Film} />
          <Link 
            to="/create" 
            icon={PlusSquare}
            state={{ from: location.pathname }}
          />
          <Link to="/messages" icon={MessageCircle} />
        </nav>
      </div>
    </>
  );
}